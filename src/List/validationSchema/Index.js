const validate = (values) => {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = "Required";
  } else if (values.fullname.length > 15) {
    errors.fullname = "Must be 15 characters or less";
  }
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 10) {
    errors.password = "Must be 10 characters or less";
  }

  return errors;
};

export default validate;
