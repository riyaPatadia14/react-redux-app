import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// redux
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { onAppend } from "../redux/action/Action";
// route
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [register, setRegister] = useState([]);
  const regData = useSelector((state) => state);
  console.log("regData", regData);
  const onHandleRegister = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  // const dispatch = useDispatch();
  const onRegister = () => {
    localStorage.setItem("register", true);
    axios.post("https://63ea1cc8e0ac9368d64a8759.mockapi.io/Register", {
      fullname: register.fullname,
      username: register.username,
      email: register.email,
      password: register.password,
    });
    // register.filter((x)=> x.)
    localStorage.setItem("Registered", JSON.stringify(register));
    // dispatch(onAppend(e, r));
    navigate("/login");
  };
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("Login");
    if (!login) {
      navigate("/");
    }
  }, [0]);
  useEffect(() => {
    onRegister();
  }, []);
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
        <Button variant="contained" onClick={() => onRegister()}>
          Register
        </Button>
      </Stack>
    </>
  );
};

export default Registration;
