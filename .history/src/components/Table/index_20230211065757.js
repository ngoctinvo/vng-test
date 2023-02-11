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

const Table = () => {
  return (
    <div>
      <Heading heading={title} />
      {records.map((record) => (
        <Row record={record} />
      ))}
    </div>
  );
};

export default Table;
