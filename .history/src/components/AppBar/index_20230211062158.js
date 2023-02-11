import React from "react";
import { styled } from "@linaria/react";

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
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const AppBar = () => {
  return (
    <NavBar>
      <NavItem href="/orders">orders</NavItem>
      <NavItem href="/customers">customers</NavItem>
      <NavItem href="/employees">employees</NavItem>
    </NavBar>
  );
};

export default AppBar;
