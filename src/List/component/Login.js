import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { LoginAPI } from "../service/Index";
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
  const [reg, setReg] = useState([]);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const getData = () => {
    LoginAPI()?.then((response) => setReg(response.data));
  };
  useEffect(() => {
    getData();
  }, []);

  const onAdminClick = () => {
    navigate("/adminlogin");
  };

  const onLogin = (fetchValue) => {
    let matchLogin = reg?.filter(
      (x) =>
        x.username == fetchValue.username && x.password == fetchValue.password
    );
    let mappedData = matchLogin.map((x) => x.username);
    if (matchLogin.length > 0) {
      localStorage.setItem("mappedData", mappedData);
      navigate("/drawers/payments");
    } else if (
      !matchLogin.length > 0 ||
      !matchLogin.length == "" ||
      !matchLogin.length == 0
    ) {
      localStorage.setItem("login false", false);
      navigate("/registration");
    }
    localStorage.setItem("mappedData", mappedData);
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
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          } else if (values.username.length > 15) {
            errors.username = "Invalid name";
          }
          if (!values.password) {
            errors.username = "Required";
          } else if (!values.password.length > 15) {
            errors.username = "Invalid password";
          }
          return errors;
        }}
        onSubmit={(val) => {
          // console.log(val);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          onLogin(val);
          // setSubmitting(false);
          // }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,

          /* and other goodies */
        }) => (
          <Box sx={style}>
            {/* <div> */}
            <Stack
              onSubmit={handleSubmit}
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
              <FormControl sx={{ m: 1, width: "45ch" }} variant="standard">
                <Input
                  placeholder="Password"
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
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
                Login
              </Button>
              <Button onClick={onAdminClick}>Admin</Button>
            </Stack>
          </Box>
        )}
      </Formik>
    </>
  );
};

export default Login;
