import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
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

// validate
const validate = (values) => {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = "Required";
  } else if (values.fullname.length > 15) {
    errors.fullname = "Must be 15 characters or less";
  }
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 10) {
    errors.password = "Must be 10 characters or less";
  }

  return errors;
};

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [register, setRegister] = useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const regData = useSelector((state) => state);
  console.log("regData", regData);
  // const onHandleRegister = (e) => {
  //   // console.log(e.target.name);
  //   // console.log(e.target.value);
  //   setRegister({ ...register, [e.target.name]: e.target.value });
  // };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onRegister = () => {
    axios.post("https://63ea1cc8e0ac9368d64a8759.mockapi.io/Register", {
      fullname: register.fullname,
      username: register.username,
      email: register.email,
      password: register.password,
    });
    localStorage.setItem("Registered", JSON.stringify(register.username));
    console.log(
      "tima",
      localStorage.setItem("Registered", JSON.stringify(register))
    );
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
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "45ch" }}>
            <Input
              id="fullname"
              name="fullname"
              placeholder="FullName"
              onChange={formik.handleChange}
              value={formik.values.fullname}
              aria-describedby="standard-weight-helper-text"
            />
          </FormControl>
          {formik.errors.fullname ? <div>{formik.errors.fullname}</div> : null}
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "45ch" }}>
            <Input
              id="username"
              placeholder="UserName"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              aria-describedby="standard-weight-helper-text"
            />
          </FormControl>
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "45ch" }}>
            <Input
              id="email"
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              aria-describedby="standard-weight-helper-text"
            />
          </FormControl>
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <FormControl sx={{ m: 1, width: "45ch" }} variant="standard">
            <Input
              placeholder="Password"
              name="password"
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={formik.handleChange}
              value={formik.values.password}
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
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <Button variant="contained" onClick={() => onRegister()}>
            Register
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Registration;
