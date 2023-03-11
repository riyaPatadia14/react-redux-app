import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
// import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
// route
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import AdminLogin from "./AdminLogin";
// redux
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
const AdminLogin = () => {
  const [admin, setAdmin] = useState([]);
  const [result, setResult] = useState([]);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const dispatch = useDispatch();
  const onAdminField = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  const adminData = useSelector((state) => state?.Admin);
  console.log("adminData", adminData);

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
    } else if (blah.length > 0) {
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
              name="username"
              onChange={onAdminField}
              aria-describedby="standard-weight-helper-text"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "45ch" }} variant="standard">
            <Input
              placeholder="Password"
              name="password"
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={onAdminField}
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
          <Button
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
