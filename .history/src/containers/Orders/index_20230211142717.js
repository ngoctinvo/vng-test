import React from "react";
import Table from "../../components/Table";
import data from "../../../mock-data/orders.json";

const Orders = () => {
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
        onEditRecord={ }
        onDeleteRecord={ }
      />
    </div>
  );
};

export default Orders;
