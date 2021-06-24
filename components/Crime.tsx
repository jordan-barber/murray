import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { crime, CrimeLocation } from "../types/Crime";

const CrimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border: solid 1px #ff323c;
  padding: 8px;
  border-radius: 4px;
  max-width: 800px;
  margin: auto;
  margin-top: 12px;
`;

const H3 = styled.h3`
  font-weight: 200;
  padding: 0;
  margin: 0;
`;

const H4 = styled.h4`
  padding: 0;
  margin-top: 8px;
  margin-bottom: 0;
  font-weight: 300;
`;

interface Props {
  category: string;
  locationType: string;
  location: CrimeLocation;
  outcomeStatus?: string;
}

export const Crime: React.FC<Props> = ({
  category,
  locationType,
  location,
  outcomeStatus,
}) => {
  console.log(":SDF:DS:F " + category);
  return (
    <CrimeContainer>
      <H3>
        <FontAwesomeIcon icon={crime[category].icon} /> {crime[category].name}
      </H3>
      <H4>{location.street.name}</H4>
      <H3>{outcomeStatus}</H3>
    </CrimeContainer>
  );
};
