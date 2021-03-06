import Head from "next/head";
import { NextPage } from "next";
import styled from "styled-components";
import { TeamInfo } from "../../types/Stadium";
import { Title } from "../../components/Title";
import { useEffect, useState } from "react";
import moment from "moment";
import { fetchCrimeData } from "../../helpers/api";
import { Crime } from "../../components/Crime";
import { Error } from "../../components/Error";
import { CrimeData } from "../../types/Crime";

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const TotalCrimes = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  text-align: left;
  font-weight: 200;
`;

const CrimesReported = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  border-radius: 50%;
  background-color: #ff323c;
  color: #ffffff;
  padding: 4px;
  font-size: 12px;
  height: 20px;
  width: 20px;
`;

interface Props {
  teamInfo: TeamInfo;
  crimeInfo: any;
  postCode: string;
}

const Team: NextPage<Props> = ({
  teamInfo: { name, crestUrl },
  crimeInfo,
  postCode,
}) => {
  const [selectedDate, setSelectedDate] = useState(
    moment().subtract(2, "month").format("YYYY-MM")
  );
  const [stadiumCrimeInfo, setStadiumCrimeInfo] = useState(crimeInfo);

  useEffect(() => {
    const getCrimeData = async () => {
      const data = await fetchCrimeData(postCode, selectedDate);

      setStadiumCrimeInfo(data);
    };

    getCrimeData();
  }, [selectedDate]);

  return (
    <div>
      <Head>
        <title>UK Football Crime Statistics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Title teamName={name} clubBadge={crestUrl} change={setSelectedDate} />
        <TotalCrimes>
          Total number of crimes reported -{" "}
          <CrimesReported>{stadiumCrimeInfo.length}</CrimesReported>
        </TotalCrimes>
      </Container>
      <>
        {Object.keys(stadiumCrimeInfo).length < 1 && (
          <Error message="There is no crime available for the specified date." />
        )}
        {Object.keys(stadiumCrimeInfo).length > 0 &&
          stadiumCrimeInfo.map((crime: CrimeData, i: number) => {
            return (
              <Crime
                key={i}
                category={crime.category}
                locationType={crime["location_type"]}
                location={crime.location}
                outcomeStatus={
                  crime["outcome_status"] && crime["outcome_status"].category
                }
              />
            );
          })}
      </>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const teamInfo = await fetch(
    `http://localhost:3000/api/stadium/${
      context.params.id
    }?date=${moment().format("YYYY-MM")}`
  ).then((res) => res.json());

  const postCode = teamInfo.address
    .split(",")
    .map((s: string) => s.trim().match(/([A-Za-z]{1,2}\d{1,2})(\s?(\d?\w{2}))?/))
    .filter((e: any) => e)[0][0];

  const crimeInfo = await fetch(
    `http://localhost:3000/api/crime/${postCode}`
  ).then((res) => res.json());

  return {
    props: {
      teamInfo,
      crimeInfo,
      postCode,
    },
  };
}

export default Team;
