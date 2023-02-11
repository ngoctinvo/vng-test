import React, { useState } from "react";
import Table from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@linaria/react";
import Popup from "../../components/Popup";
import {
  createOrder,
  deleteOrder,
  updateOrder,
} from "../../redux/action/ordersAction";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AddIcon from "../../icons/add";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExportExcel from "../../components/ExportExcel";

const Wrapper = styled.div`
  width: 100%;
`;

const ControlButtons = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

const emptyOrder = {
  order_number: 0,
  customer_id: 0,
  order_date: "",
  ship_date: "",
  employee_number: 0,
};

const Orders = () => {
  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(emptyOrder);
  const dispatch = useDispatch();
  const { ordersList = [] } = useSelector((state) => state.orders);
  const handleEditRecord = (record, index) => {
    setSelectedOrder({ ...record });
    setOpen(true);
  };
  const handleDeleteRecord = (record, index) => {
    dispatch(deleteOrder(record.order_number));
    toast("Deleted");
  };

  return (
    <Wrapper>
      <ControlButtons>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          <AddIcon /> Add
        </Button>
        <ExportExcel data={ordersList} />
      </ControlButtons>

      <Popup
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedOrder({ ...emptyOrder });
        }}
      >
        {selectedOrder.order_number !== 0 && (
          <Input
            value={selectedOrder.order_number}
            placeholder="..."
            label="Order number"
            onChange={(e) =>
              setSelectedOrder({
                ...selectedOrder,
                order_number: e.target.value,
              })
            }
            disabled={selectedOrder === 0}
          />
        )}

        <Input
          value={selectedOrder.customer_id}
          placeholder="..."
          label="Customer ID"
          onChange={(e) =>
            setSelectedOrder({ ...selectedOrder, customer_id: e.target.value })
          }
        />
        <Input
          value={selectedOrder.order_date}
          placeholder="Order number..."
          label="Order date"
          onChange={(e) =>
            setSelectedOrder({ ...selectedOrder, order_date: e.target.value })
          }
        />
        <Input
          value={selectedOrder.ship_date}
          placeholder="..."
          label="Ship date"
          onChange={(e) =>
            setSelectedOrder({ ...selectedOrder, ship_date: e.target.value })
          }
        />
        <Input
          value={selectedOrder.employee_number}
          placeholder="..."
          label="Employee number"
          onChange={(e) =>
            setSelectedOrder({
              ...selectedOrder,
              employee_number: e.target.value,
            })
          }
        />
        <Button
          onClick={() => {
            if (selectedOrder.order_number === 0) {
              dispatch(createOrder(selectedOrder));
              toast("Created");
            } else {
              dispatch(updateOrder(selectedOrder));
              toast("Updated");
            }
            setSelectedOrder({ ...emptyOrder });
            setOpen(false);
          }}
          width="100%"
        >
          {selectedOrder.order_number === 0 ? "ADD" : "SAVE"}
        </Button>
      </Popup>
      <Table
        records={ordersList}
        heading={[
          "Order Number",
          "Customer ID",
          "Order Date",
          "Ship Date",
          "Employee Number",
        ]}
        onEditRecord={handleEditRecord}
        onDeleteRecord={handleDeleteRecord}
        template={[5, 10, 20, 15, 15, 20, 15]}
      />
      <ToastContainer />
    </Wrapper>
  );
};

export default Orders;
