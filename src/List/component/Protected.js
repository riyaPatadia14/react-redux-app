import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let register = localStorage.getItem("Registration");
    if (!register) {
      navigate("/");
    }
  }, [0]);
  return (
    <div>
      <Component />
      {/* {console.log("Hellooooo protected")} */}
    </div>
  );
};

export default Protected;
