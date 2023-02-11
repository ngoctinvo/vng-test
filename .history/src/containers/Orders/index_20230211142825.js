import React from "react";
import Table from "../../components/Table";
import data from "../../../mock-data/orders.json";

const Orders = () => {
  const handleEditRecord = (record, index) => {
    console.log("edit", record, index);
  };
  const handleDeleteRecord = (record, index) => {
    console.log("edit", record, index);
  };
  return (
    <div>
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
      />
    </div>
  );
};

export default Orders;
