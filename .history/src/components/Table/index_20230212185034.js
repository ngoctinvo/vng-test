import { styled } from "@linaria/react";
import React, { useEffect, useState } from "react";
import DeleteIcon from "../../icons/delete";
import EditIcon from "../../icons/edit";
import ArrowDown from "../../icons/arrowDown";
import Input from "../Input";
import { compareDate } from "../../utils";

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
  width: ${({ width }) => (width ? `${width}% ` : "fit-content")};
  text-align: ${({ align }) => align};
  border-bottom: 1px solid #dfdfdf;
  border-right: 1px solid #dfdfdf;
  border-radius: 2px;
  padding: 5px;
  overflow: hidden;
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
  width: ${({ width }) => (width ? `${width}% ` : "fit-content")};
  text-align: ${({ align }) => align};
  cursor: pointer;
  &:active {
    color: #c0c0c0;
    svg {
      color: #c0c0c0;
    }
  }
  svg {
    width: 14px;
    height: 14px;
    color: white;
  }
`;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 2px;
  overflow: hidden;
`;

const Table = (props) => {
  const {
    template = [30, 20, 30, 20],
    align = "center",
    onDeleteRecord,
    onEditRecord,
    records = [],
    heading,
    width,
    checkList,
    setCheckList,
  } = props;
  const [keyword, setKeyword] = useState("");
  const [showingRecords, setShowingRecords] = useState(records);

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setCheckList([...Array(showingRecords.length).keys()]);
    } else {
      setCheckList([]);
    }
  };

  useEffect(() => {
    const filterd = records.filter((item) =>
      Object.values(item).some(
        (value) => `${value}`.toLowerCase().indexOf(keyword.toLowerCase()) > -1
      )
    );
    setShowingRecords(filterd);
  }, [keyword, records]);

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <Input
        label="Search:"
        placeholder="Type anything"
        value={keyword}
        onChange={handleSearch}
        width={[5, 95]}
      />
      <Wrapper width={width}>
        <StyledHeading>
          <HeadingCell align={align} width={template[0]}>
            <input type="checkbox" onChange={handleCheckAll} />
          </HeadingCell>
          {heading.map((title, index) => (
            <HeadingCell
              key={index}
              width={template[index + 1]}
              align={align}
              onClick={() => {
                const keyword = Object.keys(records[0])[index];
                const sorted = [...records];
                sorted.sort((a, b) => {
                  if (typeof a[keyword] === "string") {
                    return a[keyword].localeCompare(b[keyword]);
                  } else if (a[keyword].includes("date")) {
                    return compareDate(a[keyword], b[keyword]);
                  }
                  return a[keyword] - b[keyword];
                });

                setShowingRecords(sorted);
              }}
            >
              {title} <ArrowDown />
            </HeadingCell>
          ))}
          <HeadingCell align={align} width={template[template.length - 1]}>
            Actions
          </HeadingCell>
        </StyledHeading>
        <StyledRecords>
          {showingRecords.length > 0 &&
            showingRecords.map((record, index) => (
              <StyledRecord>
                <Cell align={align} width={template[0]}>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        const newList = [...checkList, index];

                        setCheckList(newList);
                      } else {
                        const newList = checkList.filter(
                          (item) => item !== index
                        );
                        setCheckList(newList);
                      }
                    }}
                    checked={checkList.includes(index)}
                  />
                </Cell>
                {Object.values(record).map((val, index) => (
                  <Cell align={align} width={template[index + 1]}>
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
    </div>
  );
};

export default Table;
