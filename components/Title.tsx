import styled from "styled-components";
import Image from "next/image";
import { DropDown } from "./DropDown";
import { getDates } from "../helpers/dates";
import moment, { Moment } from "moment";
import { Dispatch, SetStateAction } from "react";

const TeamInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`;

interface Props {
  teamName: string;
  clubBadge: string;
  change: Dispatch<SetStateAction<string>>;
}

export const Title: React.FC<Props> = ({ teamName, clubBadge, change }) => {
  const dates = getDates(
    moment().subtract(1, "month"),
    moment().subtract(1, "year")
  );

  return (
    <>
      <TeamInfo>
        <Image src={clubBadge} width={60} height={60} />
        <h1> {teamName}</h1>
      </TeamInfo>
      <DropDown change={change}>
        {dates
          .sort((a: any, b: any) =>
            Math.abs(moment(b).valueOf() - moment(a).valueOf())
          )
          .map((date) => (
            <option key={date}>{date}</option>
          ))}
      </DropDown>
    </>
  );
};
