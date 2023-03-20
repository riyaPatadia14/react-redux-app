import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
// import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import { Formik } from "formik";
import PaymentSchema from "../validationSchema/PaymentSchema";
import { onWithdrawal } from "../redux/action/Action";
import { useDispatch, useSelector } from "react-redux";
const PaymentForm = () => {
  // const [withdrawal, setWithdrawal] = useState([]);
  const dispatch = useDispatch();
  const handleOnWithdrawal = (e) => {
    // debugger;
    dispatch(onWithdrawal(e));
    console.log("e", e);
    // console.log("submit event", dispatch(onWithdrawal(e)));
  };
  return (
    <div>
      <Formik
        initialValues={{
          customerid: "",
          payeename: "",
          accountno: "",
          amount: "",
          remark: "",
        }}
        validate={PaymentSchema}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          handleOnWithdrawal(values);
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
        }) => (
          <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ marginTop: "20%", marginRight: "50%" }}>
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "45ch" }}
              >
                <Input
                  id="customerid"
                  placeholder="Customer Id"
                  name="customerid"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.customerid}
                  aria-describedby="standard-weight-helper-text"
                />
              </FormControl>
              {errors.customerid && touched.customerid && errors.customerid}
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "45ch" }}
              >
                <Input
                  id="payeename"
                  placeholder="Payee Name"
                  name="payeename"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.payeename}
                  aria-describedby="standard-weight-helper-text"
                />
              </FormControl>
              {errors.payeename && touched.payeename && errors.payeename}
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "45ch" }}
              >
                <Input
                  id="accountno"
                  placeholder="Account Number"
                  name="accountno"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.accountno}
                  aria-describedby="standard-weight-helper-text"
                />
              </FormControl>
              {errors.accountno && touched.accountno && errors.accountno}
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "45ch" }}
              >
                <Input
                  id="amount"
                  placeholder="Amount"
                  name="amount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                  aria-describedby="standard-weight-helper-text"
                />
              </FormControl>
              {errors.amount && touched.amount && errors.amount}
              <FormControl
                variant="standard"
                sx={{ m: 1, mt: 3, width: "45ch" }}
              >
                <Input
                  id="remark"
                  placeholder="Remark"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.remark}
                  name="remark"
                  aria-describedby="standard-weight-helper-text"
                />
              </FormControl>
              {errors.remark && touched.remark && errors.remark}
              <Button type="submit" disabled={isSubmitting} variant="contained">
                Submit
              </Button>
            </div>
          </Box>
        )}
      </Formik>
    </div>
  );
};

export default PaymentForm;
