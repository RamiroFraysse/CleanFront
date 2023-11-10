import * as Yup from "yup";

export const validationSchemaAccessForm = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .matches(/@[^.]*\./, "Invalid email format")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must contain at least 6 characters")
    .required("Required"),
})