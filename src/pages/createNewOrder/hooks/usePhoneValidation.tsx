import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { initialValuesType } from "../types/phoneFormType";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

const usePhoneValidation = ({ setPhone }: usePhoneValidationProps) => {
  const { t } = useTranslation();
  const initialValuesPhone = {
    phone: "",
  };

  const validationSchemaPhone = Yup.object({
    phone: Yup.string().required(t("required")),
  });

  const onSubmitPhone = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    console.log("Form Data :", values);
    setPhone(values.phone);
    formikHelpers.resetForm();
  };
  return { initialValuesPhone, validationSchemaPhone, onSubmitPhone };
};

type usePhoneValidationProps = {
  setPhone: Dispatch<SetStateAction<string>>;
};

export default usePhoneValidation;
