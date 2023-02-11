import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar";
import { styled } from "@linaria/react";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AppLayout = () => {
  return (
    <StyledLayout>
      <AppBar />
      <Outlet style={{ minWidth: "calc(100vw - 100px)" }} />
    </StyledLayout>
  );
};

export default AppLayout;
