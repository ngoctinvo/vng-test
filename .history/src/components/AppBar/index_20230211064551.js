import React from "react";
import { styled } from "@linaria/react";
import HomeIcon from "../../icons/home";
import OrderIcon from "../../icons/order";

import CustomerIcon from "../../icons/customer";
import EmployeeIcon from "../../icons/employee";

const NavItem = styled.a`
  width: 100px;
  height: 100px;
  border: 1px solid #aaecec;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  color: gray;
  margin: auto;
  display: block;
  &:hover {
    background-color: #aaecec;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  height: fit-content;
  width: 100px;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100vw;
    height: 100px;
  }
`;

const Wrapper = styled.div`
  background-color: #bbeaea;
  height: 100vh;
`;

const AppBar = () => {
  return (
    <NavBar>
      <NavItem href="/">
        <HomeIcon />
        Home
      </NavItem>
      <NavItem href="/orders">
        <OrderIcon />
        Orders
      </NavItem>
      <NavItem href="/customers">
        <CustomerIcon /> Customers
      </NavItem>
      <NavItem href="/employees">
        <EmployeeIcon />
        Employees
      </NavItem>
    </NavBar>
  );
};

export default AppBar;
