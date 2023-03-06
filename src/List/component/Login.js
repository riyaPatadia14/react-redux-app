import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// route
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const onHandleLogin = () => {
    login().then(() => {
      navigate("/bankdetail");
    });
  };
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
              label="UserName / Email"
              variant="filled"
              color="primary"
              focused
            />
            <TextField
              label="Password"
              variant="filled"
              color="primary"
              focused
            />
            <Link to="/bankdetail">
              <Button variant="contained" onClick={onHandleLogin}>
                Login
              </Button>
            </Link>
          </Box>
        </div>
      </section>
    </>
  );
};

export default Login;
