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
import LoginSchema from "../validationSchema/LoginSchema";
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

  // const getData = () => {
  //   LoginAPI()?.then((response) => setReg(response.data));
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  const onAdminClick = () => {
    navigate("/adminlogin");
  };
  const navigate = useNavigate();
  const onLogin = (fetchValue) => {
    console.log("fetchValue", fetchValue.username);
    console.log("fetchValue", fetchValue);
    LoginAPI(fetchValue).then((x) => {
      console.log("x", x.config.data);
      if (x.status === 200) {
        localStorage.setItem("Login", true);
        navigate("/drawers/payments");
      }
    });
    //   let mappedData = matchLogin.map((x) => x.username);
    //   if (matchLogin.length > 0) {
    //   } else if (
    //     !matchLogin.length > 0 ||
    //     !matchLogin.length == "" ||
    //     !matchLogin.length == 0
    //   ) {
    //     localStorage.setItem("Login", false);
    //     navigate("/registration");
    //   }
    //   localStorage.setItem("mappedData", mappedData);
    //   localStorage.setItem("objectData", objectData);
    //   const myJSON = JSON.stringify(objectData);
    //   localStorage.setItem("testJSON", myJSON);
  };

  // let login = localStorage.getItem("Login");
  // if (login) {
  //   navigate("/drawers/payments");
  // }

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={LoginSchema}
        onSubmit={(val) => {
          // console.log(val);
          // setTimeout(() => {
          alert(JSON.stringify(val, null, 2));
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
              <FormControl sx={{ m: 1, width: "45ch" }} variant="standard">
                <Input
                  placeholder="UserName"
                  id="standard-adornment-username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
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
