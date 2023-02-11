import React from "react";
import Table from "../../components/Table";
import data from "../../mock-data/orders.json";

import { styled } from "@linaria/react";

const Wrapper = styled.div`
  width: 100%;
`;

const Orders = () => {
  const handleEditRecord = (record, index) => {
    console.log("edit", record, index);
  };
  const handleDeleteRecord = (record, index) => {
    console.log("edit", record, index);
  };
  return (
    <Wrapper>
      <Table
        records={data}
        heading={[
          "Order Number",
          "Customer ID",
          "Order Date",
          "Ship Date",
          "Employee Number",
        ]}
        onEditRecord={handleEditRecord}
        onDeleteRecord={handleDeleteRecord}
        template={[10, 15, 15, 15, 15, 20]}
      />
    </Wrapper>
  );
};

export default Orders;
