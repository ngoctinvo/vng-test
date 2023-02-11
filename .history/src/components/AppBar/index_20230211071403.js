import React from "react";
import { styled } from "@linaria/react";
import HomeIcon from "../../icons/home";
import OrderIcon from "../../icons/order";

import CustomerIcon from "../../icons/customer";
import EmployeeIcon from "../../icons/employee";

const NavItem = styled.a `
  width: 100px;
  height: 100px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  color: gray;
  margin: auto;
  color: white;
  display: block;
  &:hover {
    background-color: #165a72;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

const NavBar = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0;
  height: fit-content;
  width: 100px;
  @media (max-width: 768px) {
    flex-direction: row;
    height: 100%;
  }
`;

const Wrapper = styled.div `
  background-color: v;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100vw;
    height: 100px;
  }
`;

const AppBar = () => {
    return ( <
        Wrapper >
        <
        NavBar >
        <
        NavItem href = "/" >
        <
        HomeIcon / >
        Home { " " } <
        /NavItem>{" "} <
        NavItem href = "/orders" >
        <
        OrderIcon / >
        Orders { " " } <
        /NavItem>{" "} <
        NavItem href = "/customers" >
        <
        CustomerIcon / > Customers { " " } <
        /NavItem>{" "} <
        NavItem href = "/employees" >
        <
        EmployeeIcon / >
        Employees { " " } <
        /NavItem>{" "} <
        /NavBar>{" "} <
        /Wrapper>
    );
};

export default AppBar;