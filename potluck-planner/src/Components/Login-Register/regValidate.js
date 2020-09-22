import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "Must be at least 4 chars"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Must be at least 5 chars"),
  role: yup.string().required("Role is required"),
});
