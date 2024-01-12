import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/AddtoBlackListType";

const useAddtoBlackListValidation = () => {
  const { t } = useTranslation();
  const initialValues = {
    phone: "",
  };
  const validationSchema = Yup.object({
    phone: Yup.string().required(t("required")),
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

export default useAddtoBlackListValidation;
