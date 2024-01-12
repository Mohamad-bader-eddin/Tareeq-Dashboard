import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/AddAppVarialbesPeriodsFormType";

const useAddAppVarialbesPeriodsFormValidation = () => {
  const { t } = useTranslation();
  const initialValues = {
    from: null,
    to: null,
    X: 0,
    Y: 0,
    Z: 0,
    S: 0,
    P: 0,
    Power1: 0,
    Power2: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    L: 0,
  };

  const validationSchema = Yup.object({
    from: Yup.date().required(t("required")),
    to: Yup.date().required(t("required")),
    X: Yup.number().required(t("required")),
    Y: Yup.number().required(t("required")),
    Z: Yup.number().required(t("required")),
    S: Yup.number().required(t("required")),
    P: Yup.number().required(t("required")),
    Power1: Yup.number().required(t("required")),
    Power2: Yup.number().required(t("required")),
    A: Yup.number().required(t("required")),
    B: Yup.number().required(t("required")),
    C: Yup.number().required(t("required")),
    D: Yup.number().required(t("required")),
    L: Yup.number().required(t("required")),
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

export default useAddAppVarialbesPeriodsFormValidation;
