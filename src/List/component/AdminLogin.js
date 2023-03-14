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
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { onAdmin } from "../redux/action/Action";

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

// validate
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 10) {
    errors.password = "Must be 10 characters or less";
  }

  return errors;
};

const AdminLogin = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
    },
  });
  // const initialValues = { username: "", password: "" };
  const [admin, setAdmin] = useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  // const [submitting, setSubmitting] = useState(true);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  // const onAdminField = (e) => {
  //   console.log("eve", e.target.name);
  //   console.log("ll", e.target.value);
  //   setAdmin({ ...admin, [e.target.name]: e.target.value });
  // };
  const adminData = useSelector((state) => state?.Admin);
  // console.log("adminData", adminData);

  const onAdminLogIn = (e) => {
    const blah = adminData?.filter(
      (x) => x.UserName == admin.UserName && x.Password == admin.Password
    );
    console.log("!blah", !blah);
    console.log("blah", blah);
    if (!blah.length > 0) {
      dispatch(onAdmin(admin, e));
      localStorage.setItem("Admin", true);
      navigate("/drawers/bankdetail");
    } else if (blah.length > 0 && blah.length == 0 && blah.length == "") {
      alert("not matching data");
    }
    console.log("handleFieldValueUpdate: ", dispatch(onAdmin(admin, e)));
  };
  const navigate = useNavigate();
  useEffect(() => {
    let register = localStorage.getItem("Login");
    if (register) {
      navigate("/drawers/bankdetail");
    }
  }, []);

  return (
    <>
      <Box sx={style}>
        {/* <div> */}
        <Stack
          onSubmit={formik.handleSubmit}
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
          <h3 style={{ textAlign: "center" }}>Admin Login</h3>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "45ch" }}>
            <Input
              id="username"
              placeholder="UserName"
              onChange={formik.handleChange}
              value={formik.values.username}
              name="username"
              aria-describedby="standard-weight-helper-text"
            />
          </FormControl>
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
          <FormControl sx={{ m: 1, width: "45ch" }} variant="standard">
            <Input
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
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
          <Button
            type="submit"
            variant="contained"
            onClick={(e) => {
              onAdminLogIn(e, admin);
            }}
          >
            Admin
          </Button>
          {/* <Button onClick={onAdminClick}>Admin</Button> */}
        </Stack>
      </Box>
    </>
  );
};

export default AdminLogin;
