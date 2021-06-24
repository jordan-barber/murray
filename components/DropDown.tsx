import styled from "styled-components";
import React, { Dispatch, SetStateAction } from "react";

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  border: solid 1px #cccccc;
  padding: 8px;
  border-radius: 5px;
  max-width: 800px;
  margin-top: 12px;
  outline: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

interface Props {
  change: Dispatch<SetStateAction<string>>;
}

export const DropDown: React.FC<Props> = ({ children, change }) => {
  return <Select onChange={(e) => change(e.target.value)}>{children}</Select>;
};
