import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/PushNotificationsFormType";

const usePushNotificationsFormValidation = () => {
  const { t } = useTranslation();
  const initialValues = {
    userType: "",
    title: "",
    message: "",
    user: "",
  };

  const validationSchema = Yup.object({
    userType: Yup.string().required(t("required")),
    title: Yup.string().required(t("required")),
    message: Yup.string().required(t("required")),
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

export default usePushNotificationsFormValidation;
