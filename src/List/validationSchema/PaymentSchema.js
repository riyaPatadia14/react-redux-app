const PaymentSchema = (values) => {
  const errors = {};
  if (!values.customerid) {
    errors.customerid = "Required";
  } else if (values.customerid.length > 5) {
    errors.customerid = "Invalid id";
  }
  if (!values.payeename) {
    errors.payeename = "Required";
  } else if (!values.payeename.length > 5) {
    errors.payeename = "Invalid payeename";
  }
  if (!values.accountno) {
    errors.cardnumber = "Required";
  } else if (!values.accountno.length > 5) {
    errors.accountno = "Invalid accountno";
  }
  if (!values.amount) {
    errors.amount = "Required";
  } else if (!values.amount.length > 5) {
    errors.amount = "Invalid amount";
  }
  if (!values.remark) {
    errors.remark = "Required";
  } else if (!values.remark.length > 15) {
    errors.remark = "Invalid remark";
  }
  return errors;
};

export default PaymentSchema;

// import * as Yup from "yup";
// const PaymentSchema = Yup.object({
//   customerid: Yup.string("required")
//     .min(2, "Too Short!")
//     .max(15, "Too Long!")
//     .required("Required Id"),
//   payeename: Yup.string()
//     .min(2, "Too Short!")
//     .max(15, "Too Long!")
//     .required("Required PayeeName"),
//   cardnumber: Yup.string()
//     .min(2, "Too Short!")
//     .max(15, "Too Long!")
//     .required("Required CardNumber"),
//   cvv: Yup.string()
//     .min(2, "Too Short!")
//     .max(15, "Too Long!")
//     .required("Required cvv"),
//   amount: Yup.string()
//     .min(2, "Too Short!")
//     .max(15, "Too Long!")
//     .required("Required amount"),
//   remark: Yup.string()
//     .min(2, "Too Short!")
//     .max(15, "Too Long!")
//     .required("Required remark"),
// });
