import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/AddFundsFormType";

const useAddFundsFormValidation = () => {
  const { t } = useTranslation();
  const initialValues = {
    amount: "",
    transactionType: null,
  };
  const validationSchema = Yup.object({
    amount: Yup.string().required(t("required")),
    transactionType: Yup.object()
      .shape({
        id: Yup.string().required(t("required")),
        name: Yup.string().required(t("required")),
      })
      .required(t("required")),
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
