import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/ChangePasswordType";

const useChangePasswordValidation = () => {
  const { t } = useTranslation();
  const initialValues = {
    newPassword: "",
  };
  const validationSchema = Yup.object({
    newPassword: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    console.log("Form Data :", values);
    formikHelpers.resetForm();
  };
  return { initialValues, validationSchema, onSubmit };
};

export default useChangePasswordValidation;
