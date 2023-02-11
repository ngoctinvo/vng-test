import { styled } from "@linaria/react";
import React from "react";

const records = [
  {
    name: "A",
    id: 123,
    position: "A1f",
  },
  {
    name: "A",
    id: 123,
    position: "A1f",
  },
  {
    name: "A",
    id: 123,
    position: "A1f",
  },
  {
    name: "A",
    id: 123,
    position: "A1f",
  },
  {
    name: "A",
    id: 123,
    position: "A1f",
  },
  {
    name: "A",
    id: 123,
    position: "A1f",
  },
];

const title = ["Name", "ID", "Position"];

const StyledHeading = styled.div`
  display: flex;
  flex-direction: row;
  background-color: gray;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
`;

const StyledHeadingCell = styled.div`
  width: fit-content;
`;

const Table = () => {
  return (
    <div>
      <StyledHeading>
        {title.map((tit) => (
          <StyledHeadingCell>{tit}</StyledHeadingCell>
        ))}
      </StyledHeading>
    </div>
  );
};

export default Table;
