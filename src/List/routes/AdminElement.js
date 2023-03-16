import React from "react";
import Roles from "./Roles";

const AdminElement = ({ children }) => {
  const AdminRoles = Roles.Admin;

  if (AdminRoles === Roles.Admin) return <>{children}</>;
  else {
    alert("Permission is not granted");
  }
};

export default AdminElement;
