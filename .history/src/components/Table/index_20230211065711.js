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

const Table = () => {
  return (
    <div>
      <Heading />
      {records.map((record) => (
        <Row />
      ))}
    </div>
  );
};

export default Table;
