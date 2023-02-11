import React from "react";
import { styled } from "@linaria/react";
import HomeIcon from "../../icons/home";
import OrderIcon from "../../icons/order";

import CustomerIcon from "../../icons/customer";
import EmployeeIcon from "../../icons/employee";

const NavItem = styled.a`
  width: 150px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  padding: 24px;
  text-align: left;
  color: gray;
  margin: auto;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;

  &:hover {
    background-color: #165a72;
  }
  svg {
    width: 20px;
    height: 20px;
    display: block;
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  height: fit-content;
  width: 150px;
  @media (max-width: 768px) {
    flex-direction: row;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  display: fixed;
  background-color: #134b5f;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100vw;
    height: 100px;
  }
`;

const AppBar = () => {
  return (
    <div>
      <Wrapper>
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
      </Wrapper>
    </div>
  );
};

export default AppBar;
