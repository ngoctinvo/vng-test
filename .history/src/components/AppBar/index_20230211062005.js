import React from "react";
import { styled } from "@linaria/react";

const NavItem = styled.div`
  background-color: #bbeaea;
  width: 100px;
  height: 100px;
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
      <NavItem>
        <a href="/orders">orders</a>
      </NavItem>
      <NavItem>
        <a href="/customers">customers</a>
      </NavItem>
      <NavItem>
        <a href="/employees">employees</a>
      </NavItem>
    </NavBar>
  );
};

export default AppBar;
