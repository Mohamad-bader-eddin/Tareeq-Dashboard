import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/OtherAppVariablesFormType";

const useOtherAppVariablesFormValidation = () => {
  const { t } = useTranslation();
  const initialValues = {
    offersTimeOutSeconds: "",
    androidAppVersion: "",
    iPhoneAppVersion: "",
    theRadius: 0,
  };

  const validationSchema = Yup.object({
    offersTimeOutSeconds: Yup.string().required(t("required")),
    androidAppVersion: Yup.string().required(t("required")),
    iPhoneAppVersion: Yup.string().required(t("required")),
    theRadius: Yup.number().required(t("required")),
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

export default useOtherAppVariablesFormValidation;
