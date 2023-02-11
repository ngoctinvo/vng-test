import { styled } from "@linaria/react";
import React from "react";
import DeleteIcon from "../../icons/delete";
import EditIcon from "../../icons/edit";

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
  padding: 5px;
`;

const StyledRecords = styled.div`
  width: 100%;
  background-color: #e9f5f9;
  display: flex;
  flex-direction: column;
`;

const StyledRecord = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  border: 1px solid #f8f8f8;
`;

const Cell = styled.div`
  width: ${({ width }) => (width ? `${width}%` : "fit-content")};
  text-align: ${({ align }) => align};
  border-bottom: 1px solid #dfdfdf;
  border-right: 1px solid #dfdfdf;
  border-radius: 2px;
  padding: 5px;
  svg {
    width: 20px;
    height: 20px;
  }
  .edit {
    color: #134b5f;
  }
  .delete {
    color: #5f1313;
  }
`;

const StyledHeadingCell = styled.div`
  width: ${({ width }) => (width ? `${width}%` : "fit-content")};
  text-align: ${({ align }) => align};
`;

const Wrapper = styled.div`
  width: 500px;
  border-radius: 2px;
  overflow: hidden;
`;

const Table = (props) => {
  const { splitWidth = [30, 40, 30], align = "center" } = props;
  const width = splitWidth || [];
  return (
    <Wrapper>
      <StyledHeading>
        {title.map((tit, index) => (
          <StyledHeadingCell width={width[index]} align={align}>
            {tit}
          </StyledHeadingCell>
        ))}
        <StyledHeadingCell>Actions</StyledHeadingCell>
      </StyledHeading>

      <StyledRecords>
        {records.map((rec) => (
          <StyledRecord>
            {rec.map((val, index) => (
              <Cell align={align} width={width[index]}>
                {val}
              </Cell>
            ))}
            <Cell>
              <EditIcon className="edit" />
              <DeleteIcon className="delete" />
            </Cell>
          </StyledRecord>
        ))}
      </StyledRecords>
    </Wrapper>
  );
};

export default Table;