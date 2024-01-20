import * as Yup from "yup";
import { initialValuesType } from "../types/ClientInfoInputsType";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { Client } from "../../types/clients";
import useClientUpdateQuery from "./useClientUpdateQuery";

const useClientsInfoValidation = ({ data }: { data: Client }) => {
  const { t } = useTranslation();
  const { mutate } = useClientUpdateQuery(data?.id);
  const initialValues = {
    joinDate: new Date(data?.created_at) || null,
    name: data?.name || "",
    phone: data?.phone || "",
    birthDate: null,
    isVerified: false,
  };

  const validationSchema = Yup.object({
    joinDate: Yup.date().required(t("required")).nullable(),
    name: Yup.string().required(t("required")),
    email: Yup.string()
      .email(t("invalid_email_format"))
      .required(t("required")),
    phone: Yup.string().required(t("required")),
    // birthDate: Yup.date().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    console.log("Form Data :", values);
    mutate(
      {
        name: values.name,
        phone: values.phone,
      },
      {
        onSuccess: () => {
          formikHelpers.resetForm();
        },
      }
    );
  };
  return { initialValues, onSubmit, validationSchema };
};

export default useClientsInfoValidation;
