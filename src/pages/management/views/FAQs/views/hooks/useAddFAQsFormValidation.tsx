import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/AddFAQsFormProps";

const useAddFAQsFormValidation = () => {
  const { t } = useTranslation();
  const initialValues = {
    englishTitle: "",
    aribicTitle: "",
    englishDescription: "",
    arabicDescription: "",
    priority: 0,
  };

  const validationSchema = Yup.object({
    englishTitle: Yup.string().required(t("required")),
    aribicTitle: Yup.string().required(t("required")),
    englishDescription: Yup.string().required(t("required")),
    arabicDescription: Yup.string().required(t("required")),
    priority: Yup.number().required(t("required")),
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

export default useAddFAQsFormValidation;
