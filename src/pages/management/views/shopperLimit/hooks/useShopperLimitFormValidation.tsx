import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/ShopperLimitFormType";

const useShopperLimitFormValidation = () => {
  const { t } = useTranslation();
  const initialValues = {
    shopperLimit: "",
  };

  const validationSchema = Yup.object({
    shopperLimit: Yup.string().required(t("required")),
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

export default useShopperLimitFormValidation;
