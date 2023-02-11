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

      <StyledRecords>
        {records.map((rec) => (
          <StyledRecord>
            {rec.map((val) => (
              <Cell>val</Cell>
            ))}
          </StyledRecord>
        ))}
      </StyledRecords>
    </div>
  );
};

export default Table;
