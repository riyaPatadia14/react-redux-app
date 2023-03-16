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
import { useDispatch, useSelector } from "react-redux";
import { onAdmin } from "../redux/action/Action";
import { Formik } from "formik";
import LoginSchema from "../validationSchema/LoginSchema";

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

const AdminLogin = () => {
  const [admin, setAdmin] = useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const dispatch = useDispatch();
  const adminData = useSelector((state) => state?.Admin);
  const navigate = useNavigate();
  const onAdminLogIn = (e) => {
    const blah = adminData?.filter(
      (x) => x.UserName == admin.UserName && x.Password == admin.Password
    );
    console.log("!blah", !blah);
    console.log("blah", blah);
    if (!blah.length > 0) {
      dispatch(onAdmin(e, admin));
      localStorage.setItem("Admin", true);
      navigate("/drawers/bankdetail");
    } else if (blah.length > 0) {
      alert("not matching data");
    }
    console.log("handleFieldValueUpdate: ", dispatch(onAdmin(admin, e)));
  };

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          onAdminLogIn(values);
          setSubmitting(false);
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
          isSubmitting,
          /* and other goodies */
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
              noValidate
              autoComplete="off"
            >
              <h3 style={{ textAlign: "center" }}>Admin Login</h3>
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
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                // onClick={(e) => onAdminLogIn(e, admin)}
              >
                Admin
              </Button>
            </Stack>
          </Box>
        )}
      </Formik>
    </>
  );
};

export default AdminLogin;
