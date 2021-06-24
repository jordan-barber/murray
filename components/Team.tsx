import styled from "styled-components";

interface Props {
  teamName: string;
  address: string;
  badgeUrl: string;
}

const TeamInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: solid 1px #ff323c;
  padding: 8px;
  border-radius: 4px;
  max-width: 800px;
  margin: auto;
  margin-top: 12px;
  transition: box-shadow 0.15s ease;

  :hover {
    box-shadow: 0 7px 12px 0 #cacaca;
  }
`;

const Badge = styled.img`
  height: 50px;
  margin-right: 12px;
`;

const SubInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 200;
`;

const TeamName = styled.h3`
  padding: 0;
  margin: 0;
  font-weight: 500;
`;

export const Team: React.FC<Props> = ({ teamName, address, badgeUrl }) => (
  <TeamInfo>
    <Badge src={badgeUrl} />
    <SubInfo>
      <TeamName>{teamName}</TeamName>
      <span>{address}</span>
    </SubInfo>
  </TeamInfo>
);
