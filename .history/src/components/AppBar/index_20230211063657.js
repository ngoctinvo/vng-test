import React from "react";
import { styled } from "@linaria/react";
import HomeIcon from "../../icons/home";

const NavItem = styled.a`
  background-color: #bbeaea;
  width: 100px;
  height: 100px;
  border: 1px solid #aaecec;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  color: gray;
  &:hover {
    background-color: #aaecec;
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100px;
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100vw;
    height: 100px;
  }
`;

const AppBar = () => {
  return (
    <NavBar>
      <HomeIcon />
      <NavItem href="/">Home</NavItem>
      <NavItem href="/orders">Orders</NavItem>
      <NavItem href="/customers">Customers</NavItem>
      <NavItem href="/employees">Employees</NavItem>
    </NavBar>
  );
};

export default AppBar;
