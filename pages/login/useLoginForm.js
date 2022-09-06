import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string().trim().required("Password is required"),
});

export function useLoginForm() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      console.log("values", values);
    },
  });

  return {
    formik,
  };
}
