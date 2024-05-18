import * as Yup from "yup";

const JordanValidNumber = /^(\\+962|0)(7[789]|79|78|77)[0-9]{7}$/;
export const Validation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, "Password must have a lowercase ")
    .matches(/\w*[A-Z]\w*/, "Password must have an uppercase")
    .matches(/\d/, "Password must have a number")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  phoneNumber: Yup.string()
    .matches(JordanValidNumber, "Enter a Valid Jordanian Number")
    .required("Phone number is required"),
});
