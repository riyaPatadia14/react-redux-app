import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// ahbshegw
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
// route
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminLogin from "./AdminLogin";

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
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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

  const onAdminClick = () => {
    navigate("/adminlogin");
  };

  const onLogin = () => {
    let matchLogin = reg?.filter(
      (x) => x.username == login.username && x.password == login.password
    );
    let mapJson = JSON.stringify(matchLogin);
    if (matchLogin.length > 0) {
      // console.log("true", true);
      localStorage.setItem("login", true);
      navigate("/drawers/payments");
    } else if (!matchLogin.length > 0) {
      localStorage.setItem("login", true);
      navigate("/registration");
    }
    // console.log("login :-", login);
    localStorage.setItem("loginStorage", mapJson);
    localStorage.setItem("Uname", login.username);
    // console.log("match", matchLogin);
  };

  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("Login");
    if (login) {
      navigate("/drawers/payments");
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
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "45ch" }}>
            <Input
              id="username"
              placeholder="UserName"
              name="username"
              onChange={onFieldChange}
              aria-describedby="standard-weight-helper-text"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "45ch" }} variant="standard">
            <Input
              placeholder="Password"
              name="password"
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={onFieldChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button variant="contained" onClick={onLogin}>
            Login
          </Button>
          <Button onClick={onAdminClick}>Admin</Button>
        </Stack>
      </Box>
    </>
  );
};

export default Login;
