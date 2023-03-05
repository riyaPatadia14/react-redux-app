import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const Registration = () => {
  return (
    <Stack
      component="form"
      sx={{
        width: "25ch",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="name"
        name="name"
        defaultValue="Name"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="username"
        defaultValue="UserName"
        name="username"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="email"
        defaultValue="Email"
        name="email"
        variant="filled"
      />
      <TextField
        hiddenLabel
        id="password"
        defaultValue="Password"
        name="password"
        variant="filled"
      />
    </Stack>
  );
};

export default Registration;
