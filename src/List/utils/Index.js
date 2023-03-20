import React, { useState } from "react";

export const LogOut = () => {
  //   let navigate = useNavigate();
  localStorage.clear();
  console.log("logout");
  //   navigate("/login");
};

// export const onField = (e) => {
//   setInput({ ...input, [e.target.name]: e.target.value });
// };
