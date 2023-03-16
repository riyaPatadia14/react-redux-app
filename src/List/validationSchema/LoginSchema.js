const LoginSchema = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 15) {
    errors.username = "Invalid name";
  }
  if (!values.password) {
    errors.username = "Required";
  } else if (!values.password.length > 15) {
    errors.username = "Invalid password";
  }
  return errors;
};

export default LoginSchema;
