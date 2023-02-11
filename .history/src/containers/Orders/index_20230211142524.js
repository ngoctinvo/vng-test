import React from "react";
import Table from "../../components/Table";
import data from "../../../mock-data/orders.json";

const Orders = () => {
    return ( <
        div >
        <
        Table records = { data }
        /> <
        /div>
    );
};

export default Orders;