import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar";

const AppLayout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
