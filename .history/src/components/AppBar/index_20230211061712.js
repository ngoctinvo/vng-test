import React from "react";
import { styled } from "@linaria/react";

const NavItem = styled.div`
  background-color: red;
`;

const NavBar = styled.div`
  @media (min-width: 1120px) {
    --some-generated-variable-for-color-in-myClassName: "darkorchid";
  }
`;

const AppBar = () => {
  return (
    <div>
      <NavItem>
        <a href="/orders">orders</a>
      </NavItem>
      <div>
        <a href="/customers">customers</a>
      </div>
      <div>
        <a href="/employees">employees</a>
      </div>
    </div>
  );
};

export default AppBar;
