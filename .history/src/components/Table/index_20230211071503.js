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
  background-color: #134b5f;
  width: 100%;
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

const StyledRecords = styled.div`
  width: 300px;
  background-color: #e9f5f9;
`;

const StyledRecord = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;

const Cell = styled.div`
  width: ${({ width }) => (width ? `${width}%` : "fit-content")};
  text-align: ${({ align }) => align};
`;

const StyledHeadingCell = styled.div`
  width: ${({ width }) => (width ? `${width}%` : "fit-content")};
  text-align: ${({ align }) => align};
`;

const Table = (props) => {
  const { splitWidth = [30, 40, 30], align = "center" } = props;
  const width = splitWidth || [];
  return (
    <div>
      <StyledHeading>
        {title.map((tit, index) => (
          <StyledHeadingCell width={width[index]} align={align}>
            {tit}
          </StyledHeadingCell>
        ))}
      </StyledHeading>

      <StyledRecords>
        {records.map((rec) => (
          <StyledRecord>
            {rec.map((val, index) => (
              <Cell align={align} width={width[index]}>
                {val}
              </Cell>
            ))}
          </StyledRecord>
        ))}
      </StyledRecords>
    </div>
  );
};

export default Table;
