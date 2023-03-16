import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  // localStorage.setItem("Admin", true);
  let AdminLogin = localStorage.getItem("Admin");
  let Login = localStorage.getItem("Login");
  if (Login) {
    return <Outlet />;
  } else if (AdminLogin) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default Protected;
