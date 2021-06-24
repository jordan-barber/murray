import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const ErrorContainer = styled.div`
  color: #949494;
  font-size: 14px;
  text-align: center;
  margin-top: 12px;

  h1 {
    font-weight: 200;
  }
`;

const Icon = styled.div`
  font-size: 48px;
`;

interface Props {
  message: string;
}

export const Error: React.FC<Props> = ({ message }) => (
  <ErrorContainer>
    <Icon>
      <FontAwesomeIcon icon={faExclamationTriangle} />
    </Icon>
    <h1>{message}</h1>
  </ErrorContainer>
);
