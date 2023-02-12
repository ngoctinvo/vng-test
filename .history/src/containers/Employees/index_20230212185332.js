import React, { useState } from "react";
import Table from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@linaria/react";
import Popup from "../../components/Popup";
import {
  createEmployee,
  deleteEmployee,
  updateEmployee,
} from "../../redux/action/employeesAction";
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

const emptyEmployee = {
  employee_number: 0,
  first_name: "",
  last_name: "",
  street_address: "",
  city: "",
  state: "",
  zipcode: "",
  phone: "",
  position: "",
  hourly_rate: 0,
  date_hired: "",
};

const Employees = () => {
  const [open, setOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(emptyEmployee);
  const [checkList, setCheckList] = useState([]);
  const dispatch = useDispatch();
  const { employeesList = [] } = useSelector((state) => state.employees);
  const handleEditRecord = (record, index) => {
    setSelectedEmployee({ ...record });
    setOpen(true);
  };
  const handleDeleteRecord = (record, index) => {
    dispatch(deleteEmployee(record.employee_number));
    toast("Deleted");
  };

  const filterRecords = () => {
    return employeesList.filter((employee, index) => checkList.includes(index));
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
        <ExportExcel data={filterRecords()} count={checkList.length} />
        <ExportPDF data={filterRecords()} count={checkList.length} />
      </ControlButtons>
      <Table
        records={employeesList}
        heading={[
          "Employee Number",
          "First Name",
          "Last Name",
          "Street Address",
          "City",
          "State",
          "Zipcode",
          "Phone",
          "Position",
          "Hourly Rate",
          "Date Hired",
        ]}
        onEditRecord={handleEditRecord}
        onDeleteRecord={handleDeleteRecord}
        template={[5, 7, 10, 5, 10, 10, 10, 10, 10, 5, 10, 10]}
        checkList={checkList}
        setCheckList={setCheckList}
      />
      <Popup
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedEmployee({ ...emptyEmployee });
        }}
      >
        {selectedEmployee.employee_number !== 0 && (
          <Input
            value={selectedEmployee.employee_number}
            placeholder="..."
            label="Employee number"
            onChange={(e) =>
              setSelectedEmployee({
                ...selectedEmployee,
                employee_number: e.target.value,
              })
            }
            disabled={selectedEmployee === 0}
          />
        )}
        <Input
          value={selectedEmployee.first_name}
          placeholder="first_name..."
          label="first_name"
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              first_name: e.target.value,
            })
          }
        />
        <Input
          value={selectedEmployee.last_name}
          placeholder="last_name..."
          label="last_name"
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              last_name: e.target.value,
            })
          }
        />
        <Input
          value={selectedEmployee.street_address}
          placeholder="street_address..."
          label="street_address"
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              street_address: e.target.value,
            })
          }
        />
        <Input
          value={selectedEmployee.city}
          placeholder="..."
          label="city"
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              city: e.target.value,
            })
          }
        />
        <Input
          value={selectedEmployee.state}
          placeholder="..."
          label="state"
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              state: e.target.value,
            })
          }
        />
        <Input
          value={selectedEmployee.zipcode}
          placeholder="..."
          label="zipcode"
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              zipcode: e.target.value,
            })
          }
        />
        <Input
          value={selectedEmployee.phone}
          placeholder="..."
          label="phone"
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              phone: e.target.value,
            })
          }
        />
        <Input
          value={selectedEmployee.position}
          placeholder="..."
          label="position"
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              position: e.target.value,
            })
          }
        />
        <Input
          value={selectedEmployee.hourly_rate}
          placeholder="..."
          label="hourly_rate"
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              hourly_rate: e.target.value,
            })
          }
        />
        <Input
          value={selectedEmployee.date_hired}
          placeholder="..."
          label="date_hired"
          onChange={(e) =>
            setSelectedEmployee({
              ...selectedEmployee,
              date_hired: e.target.value,
            })
          }
        />
        <Button
          onClick={() => {
            if (selectedEmployee.employee_number === 0) {
              const generatedEmplNum = {
                ...selectedEmployee,
                employee_number:
                  employeesList[employeesList.length - 1].employee_number + 1,
              };
              dispatch(createEmployee(generatedEmplNum));
              toast("Created");
            } else {
              dispatch(updateEmployee(selectedEmployee));
              toast("Updated");
            }
            setSelectedEmployee({ ...emptyEmployee });
            setOpen(false);
          }}
          width="100%"
        >
          {selectedEmployee.employee_number === 0 ? "ADD" : "SAVE"}
        </Button>
      </Popup>
      <ToastContainer />
    </Wrapper>
  );
};

export default Employees;
