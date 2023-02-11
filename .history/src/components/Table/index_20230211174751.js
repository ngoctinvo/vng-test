import { styled } from "@linaria/react";
import React, { useState } from "react";
import DeleteIcon from "../../icons/delete";
import EditIcon from "../../icons/edit";

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
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
  .edit {
    color: #0f789e;
  }
  .delete {
    color: #981414;
  }
`;

const HeadingCell = styled.div`
  width: ${({ width }) => (width ? `${width}%` : "fit-content")};
  text-align: ${({ align }) => align};
`;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 2px;
  overflow: hidden;
`;

const Table = (props) => {
  const [checkList, setCheckList] = useState([]);
  const {
    template = [30, 20, 30, 20],
    align = "center",
    onDeleteRecord,
    onEditRecord,
    records = [],
    heading,
    width,
  } = props;
  return (
    <Wrapper width={width}>
      <StyledHeading>
        <HeadingCell align={align} width={template[0]}>
          <input
            type="checkbox"
            onChange={(e) => {
              if (e.target.checked) {
                setCheckList([...Array(records.length - 1).keys()]);
              } else {
                setCheckList([]);
              }
            }}
          />
        </HeadingCell>
        {heading.map((tit, index) => (
          <HeadingCell width={template[index]} align={align}>
            {tit}
          </HeadingCell>
        ))}
        <HeadingCell align={align} width={template[template.length - 1]}>
          Actions
        </HeadingCell>
      </StyledHeading>

      <StyledRecords>
        {records.length > 0 &&
          records.map((record, index) => (
            <StyledRecord>
              <Cell align={align} width={template[0]}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCheckList([...checkList, index]);
                    } else {
                      const newList = checkList.filter(
                        (item) => item !== index
                      );
                      setCheckList(newList);
                    }
                  }}
                  checked={checkList[index]}
                />
              </Cell>
              {Object.values(record).map((val, index) => (
                <Cell align={align} width={template[index]}>
                  {val}
                </Cell>
              ))}
              <Cell align={align} width={template[template.length - 1]}>
                <EditIcon
                  className="edit"
                  onClick={() => onEditRecord(record, index)}
                />
                <DeleteIcon
                  className="delete"
                  onClick={() => onDeleteRecord(record, index)}
                />
              </Cell>
            </StyledRecord>
          ))}
      </StyledRecords>
    </Wrapper>
  );
};

export default Table;
