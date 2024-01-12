import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/AddFundsFormType";

const useAddFundsFormValidation = () => {
  const { t } = useTranslation();
  const initialValues = {
    amount: "",
    description: "",
  };
  const validationSchema = Yup.object({
    amount: Yup.string().required(t("required")),
    description: Yup.string().required(t("required")),
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

export default useAddFundsFormValidation;
