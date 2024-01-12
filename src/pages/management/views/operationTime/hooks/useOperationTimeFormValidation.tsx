import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/OperationTimeFormType";

const useOperationTimeFormValidation = () => {
  const { t } = useTranslation();
  const initialValues = {
    fromTime: null,
    toTime: null,
    isAlwaysRun: false,
  };

  const validationSchema = Yup.object({
    fromTime: Yup.date().required(t("required")),
    toTime: Yup.date().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    console.log("Form Data :", values);
    formikHelpers.resetForm();
  };
  return { initialValues, onSubmit, validationSchema };
};

export default useOperationTimeFormValidation;
