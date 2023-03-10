import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// route
import { useNavigate } from "react-router-dom";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const Login = () => {
  const [login, setLogin] = useState([]);
  const [reg, setReg] = useState([]);
  const onFieldChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const getData = () => {
    axios
      .get("https://63ea1cc8e0ac9368d64a8759.mockapi.io/Register")
      .then((response) => setReg(response.data));
  };
  useEffect(() => {
    getData();
  }, []);

  const onLogin = () => {
    let matchLogin = reg?.filter(
      (x) => x.id == login.username && x.password == login.password
    );
    if (matchLogin.length > 0) {
      console.log("true", true);
      localStorage.setItem("login", true);
      navigate("/drawers/bankdetail");
    } else if (!matchLogin.length > 0) {
      localStorage.setItem("login", true);
      navigate("/registration");
    }
    console.log("login :-", login);
    localStorage.setItem("Uname", login.username);
    // localStorage.setItem("trrt", login);
    // localStorage.setItem("Uname", login.email);
    // localStorage.setItem("Uname", login.accountno);
    // localStorage.setItem("Uname", login.accountype);
    // localStorage.setItem("Uname", login.bankbalance);
    // localStorage.setItem("Uname", login.transactiontype);
    console.log("match", matchLogin);
  };

  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("Login");
    if (login) {
      navigate("/drawers/bankdetail");
    }
  }, [0]);

  return (
    <>
      <Box sx={style}>
        {/* <div> */}
        <Stack
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            rowGap: 2,
            alignContent: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <h3 style={{ textAlign: "center" }}>Login</h3>
          <TextField
            hiddenLabel
            id="username"
            name="username"
            placeholder="UserName"
            onChange={onFieldChange}
            variant="filled"
          />
          <TextField
            hiddenLabel
            id="password"
            name="password"
            placeholder="Password"
            onChange={onFieldChange}
            variant="filled"
          />
          <Button variant="contained" onClick={onLogin}>
            Login
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
