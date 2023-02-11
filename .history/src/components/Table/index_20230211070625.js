import { styled } from "@linaria/react";
import React from "react";

const records = [
  ["ABC", 1, "AX"],
  ["ABC", 1, "AX"],
  ["ABC", 1, "AX"],
  ["ABC", 1, "AX"],
  ["ABC", 1, "AX"],
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

const StyledRecords = styled.div`
  width: 300px;
  background-color: #f4f4f4;
`;
const StyledRecord = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;
const Cell = styled.div`
  width: ${({ width }) => width};
`;
const StyledHeadingCell = styled.div`
  width: fit-content;
`;
const Table = () => {
  const width = [30, 40, 30];
  return (
    <div>
      <StyledHeading>
        {title.map((tit) => (
          <StyledHeadingCell>{tit}</StyledHeadingCell>
        ))}
      </StyledHeading>

      <StyledRecords>
        {records.map((rec) => (
          <StyledRecord>
            {rec.map((val, index) => (
              <Cell width={width[index]}>{val}</Cell>
            ))}
          </StyledRecord>
        ))}
      </StyledRecords>
    </div>
  );
};

export default Table;
