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
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import validate from "../validationSchema/Index";
import { RegisterAPI } from "../service/Index";
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
  const [showPassword, setShowPassword] = React.useState(false);
  const regData = useSelector((state) => state);
  console.log("regData", regData);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onRegister = (e) => {
    RegisterAPI(e);
    localStorage.setItem("Registered", JSON.stringify(e.username));
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
      <Formik
        initialValues={{ fullname: "", username: "", email: "", password: "" }}
        validate={validate}
        onSubmit={(val) => {
          onRegister(val);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Box sx={style}>
            <Stack
              onSubmit={handleSubmit}
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
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "45ch" }}
              >
                <Input
                  id="fullname"
                  name="fullname"
                  placeholder="FullName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                  aria-describedby="standard-weight-helper-text"
                />
              </FormControl>
              {errors.fullname && touched.fullname && errors.fullname}
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "45ch" }}
              >
                <Input
                  id="username"
                  placeholder="UserName"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  aria-describedby="standard-weight-helper-text"
                />
              </FormControl>
              {errors.username && touched.username && errors.username}
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "45ch" }}
              >
                <Input
                  id="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  aria-describedby="standard-weight-helper-text"
                />
              </FormControl>
              {errors.email && touched.email && errors.email}
              <FormControl sx={{ m: 1, width: "45ch" }} variant="standard">
                <Input
                  placeholder="Password"
                  name="password"
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
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
              {errors.password && touched.password && errors.password}
              <Button type="submit" variant="contained">
                Register
              </Button>
            </Stack>
          </Box>
        )}
      </Formik>
    </>
  );
};

export default Registration;
