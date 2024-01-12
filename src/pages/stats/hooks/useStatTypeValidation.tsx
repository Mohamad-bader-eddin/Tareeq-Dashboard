import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/StatTypeFormType";
import { StatType } from "../types/StatType";

const useStatTypeValidation = ({ setStatType }: useStatTypeValidationProps) => {
  const { t } = useTranslation();
  const initialValues = {
    statType: "",
  };

  const validationSchema = Yup.object({
    statType: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    console.log("Form Data :", values);
    setStatType(values.statType as StatType);
    formikHelpers.resetForm();
  };
  return { initialValues, validationSchema, onSubmit };
};

type useStatTypeValidationProps = {
  setStatType: Dispatch<SetStateAction<StatType | undefined>>;
};

export default useStatTypeValidation;
