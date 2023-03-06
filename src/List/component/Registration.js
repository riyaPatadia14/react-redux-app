import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// redux
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { onAppend } from "../redux/action/Action";
// route
import { Link } from "react-router-dom";

const Registration = () => {
  const [register, setRegister] = useState([]);

  const regData = useSelector((state) => state);
  console.log("regData", regData);
  const onHandleRegister = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const onRegister = (e, r) => {
    dispatch(onAppend(e, r));
  };

  return (
    <>
      <h4>Register</h4>
      <Stack
        component="form"
        sx={{
          width: "25ch",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField
          hiddenLabel
          id="fullname"
          name="fullname"
          placeholder="FullName"
          onChange={onHandleRegister}
          variant="filled"
        />
        <TextField
          hiddenLabel
          id="username"
          name="username"
          placeholder="UserName"
          onChange={onHandleRegister}
          variant="filled"
        />
        <TextField
          hiddenLabel
          id="email"
          placeholder="Email"
          name="email"
          onChange={onHandleRegister}
          variant="filled"
        />
        <TextField
          hiddenLabel
          id="password"
          name="password"
          placeholder="Password"
          onChange={onHandleRegister}
          variant="filled"
        />
        <Link to="/bankdetail">
          <Button variant="contained" onClick={(e) => onRegister(e, register)}>
            Register
          </Button>
        </Link>
        <a href="/">login</a>
      </Stack>
    </>
  );
};

export default Registration;
