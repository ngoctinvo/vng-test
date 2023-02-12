import React, { useState } from "react";
import Table from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@linaria/react";
import Popup from "../../components/Popup";
import {
  createCustomer,
  deleteCustomer,
  updateCustomer,
} from "../../redux/action/customersAction";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AddIcon from "../../icons/add";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExportExcel from "../../components/ExportExcel";
import ExportPDF from "../../components/ExportPDF";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const ControlButtons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const emptyCustomer = {
  customer_id: 0,
  first_name: "",
  last_name: "",
  street_address: "",
  city: "",
  state: "",
  zipcode: "",
  phone: "",
  email: "",
};

const Customers = () => {
  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(emptyCustomer);
  const [checkList, setCheckList] = useState([]);
  const dispatch = useDispatch();
  const { customersList = [] } = useSelector((state) => state.customers);
  const handleEditRecord = (record, index) => {
    setSelectedCustomer({ ...record });
    setOpen(true);
  };
  const handleDeleteRecord = (record, index) => {
    dispatch(deleteCustomer(record.customer_id));
    toast("Deleted");
  };

  const filterRecords = () => {
    return customersList.filter((customer, index) => checkList.includes(index));
  };

  return (
    <Wrapper>
      <ControlButtons>
        <Button onClick={() => setOpen(true)}>
          <AddIcon /> Add
        </Button>
        <ExportExcel data={filterRecords()} count={checkList.length} />
        <ExportPDF data={filterRecords()} count={checkList.length} />
      </ControlButtons>
      <Table
        records={customersList}
        heading={[
          "Customer ID",
          "First Name",
          "Last Name",
          "Street Address",
          "City",
          "State",
          "Zipcode",
          "Phone",
          "Email",
        ]}
        onEditRecord={handleEditRecord}
        onDeleteRecord={handleDeleteRecord}
        template={[5, 10, 9, 10, 12, 10, 7, 8, 10, 20, 5]}
        checkList={checkList}
        setCheckList={setCheckList}
      />
      <Popup
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedCustomer({ ...emptyCustomer });
        }}
      >
        {selectedCustomer.customer_id !== 0 && (
          <Input
            value={selectedCustomer.customer_id}
            placeholder="..."
            label="Customer number"
            onChange={(e) =>
              setSelectedCustomer({
                ...selectedCustomer,
                customer_id: e.target.value,
              })
            }
            disabled={selectedCustomer === 0}
          />
        )}
        <Input
          value={selectedCustomer.first_name}
          placeholder="first_name..."
          label="first_name"
          onChange={(e) =>
            setSelectedCustomer({
              ...selectedCustomer,
              first_name: e.target.value,
            })
          }
        />
        <Input
          value={selectedCustomer.last_name}
          placeholder="last_name..."
          label="last_name"
          onChange={(e) =>
            setSelectedCustomer({
              ...selectedCustomer,
              last_name: e.target.value,
            })
          }
        />
        <Input
          value={selectedCustomer.street_address}
          placeholder="street_address..."
          label="street_address"
          onChange={(e) =>
            setSelectedCustomer({
              ...selectedCustomer,
              street_address: e.target.value,
            })
          }
        />
        <Input
          value={selectedCustomer.city}
          placeholder="..."
          label="city"
          onChange={(e) =>
            setSelectedCustomer({
              ...selectedCustomer,
              city: e.target.value,
            })
          }
        />
        <Input
          value={selectedCustomer.state}
          placeholder="..."
          label="state"
          onChange={(e) =>
            setSelectedCustomer({
              ...selectedCustomer,
              state: e.target.value,
            })
          }
        />
        <Input
          value={selectedCustomer.zipcode}
          placeholder="..."
          label="zipcode"
          onChange={(e) =>
            setSelectedCustomer({
              ...selectedCustomer,
              zipcode: e.target.value,
            })
          }
        />
        <Input
          value={selectedCustomer.phone}
          placeholder="..."
          label="phone"
          onChange={(e) =>
            setSelectedCustomer({
              ...selectedCustomer,
              phone: e.target.value,
            })
          }
        />

        <Button
          onClick={() => {
            if (selectedCustomer.customer_id === 0) {
              const generatedIdCustom = {
                ...selectedCustomer,
                customer_id:
                  customersList[customersList.length - 1].customer_id + 1,
              };
              dispatch(createCustomer(generatedIdCustom));
              toast("Created");
            } else {
              dispatch(updateCustomer(selectedCustomer));
              toast("Updated");
            }
            setSelectedCustomer({ ...emptyCustomer });
            setOpen(false);
          }}
          width="100%"
        >
          {selectedCustomer.customer_id === 0 ? "ADD" : "SAVE"}
        </Button>
      </Popup>
      <ToastContainer />
    </Wrapper>
  );
};

export default Customers;
