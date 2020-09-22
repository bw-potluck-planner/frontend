import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Username is longer then 3 chars"),
  password: yup
    .string()
    .required("Email is required")
    .min(5, "Password is longer then 4 chars"),
});
