import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
// import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
const PaymentForm = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ marginTop: "20%", marginRight: "50%" }}>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "45ch" }}>
            <Input
              id="customerid"
              placeholder="Customer Id"
              name="customerid"
              aria-describedby="standard-weight-helper-text"
            />
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "45ch" }}>
            <Input
              id="payeeno"
              placeholder="Payee Name"
              name="payeeno"
              aria-describedby="standard-weight-helper-text"
            />
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "45ch" }}>
            <Input
              id="cardnumber"
              placeholder="Card Number"
              name="username"
              aria-describedby="standard-weight-helper-text"
            />
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "45ch" }}>
            <Input
              id="cvv"
              placeholder="CVV"
              name="cvv"
              aria-describedby="standard-weight-helper-text"
            />
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "45ch" }}>
            <Input
              id="username"
              placeholder="Amount"
              name="username"
              aria-describedby="standard-weight-helper-text"
            />
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, mt: 3, width: "45ch" }}>
            <Input
              id="remark"
              placeholder="Remark"
              name="remark"
              aria-describedby="standard-weight-helper-text"
            />
          </FormControl>
          <Button variant="contained">Submit</Button>
        </div>
      </Box>
    </div>
  );
};

export default PaymentForm;
