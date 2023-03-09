import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// route
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [login, setLogin] = useState([]);
  const [reg, setReg] = useState([]);
  const onFieldChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const onLogin = () => {
    let matchLogin = reg?.filter(
      (x) => x.username == login.username && x.password == login.password
    );
    if (matchLogin.length > 0) {
      localStorage.setItem("login", true);
      console.log("true", true);
      navigate("/drawers/bankdetail");
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    let register = localStorage.getItem("BankDetail");
    if (register) {
      navigate("/drawers/bankdetail");
    }
  }, [0]);
  return (
    <>
      <section>
        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="UserName "
              variant="filled"
              color="primary"
              onChange={onFieldChange}
              name="username"
              focused
            />
            <TextField
              label="Password"
              variant="filled"
              color="primary"
              name="password"
              onChange={onFieldChange}
              focused
            />
            <Button variant="contained" onClick={onLogin}>
              Login
            </Button>
          </Box>
        </div>
      </section>
    </>
  );
};

export default Login;
