import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// redux
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import { onAppend } from "../redux/action/Action";
// route
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Registration = () => {
  const [register, setRegister] = useState([]);
  const regData = useSelector((state) => state);
  console.log("regData", regData);
  const onHandleRegister = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const onRegister = () => {
    axios.post("https://63ea1cc8e0ac9368d64a8759.mockapi.io/Register", {
      fullname: register.fullname,
      username: register.username,
      email: register.email,
      password: register.password,
    });
    localStorage.setItem("Registered", JSON.stringify(register));
    navigate("/login");
  };
  const navigate = useNavigate();
  useEffect(() => {
    let register = localStorage.getItem("Login");
    if (register) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Box sx={style}>
        <Stack
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            rowGap: 2,
            alignContent: "center",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <h3 style={{ textAlign: "center" }}>Register</h3>
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
      </Box>
    </>
  );
};

export default Registration;
