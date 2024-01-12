import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/AppPhoneNumberFormProps";

const useAppPhoneNumberFormValidation = () => {
  const { t } = useTranslation();
  const initialValues = {
    appPhoneNumber: "",
  };

  const validationSchema = Yup.object({
    appPhoneNumber: Yup.string().required(t("required")),
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

export default useAppPhoneNumberFormValidation;
