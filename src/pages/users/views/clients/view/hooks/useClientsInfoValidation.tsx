import * as Yup from "yup";
import { initialValuesType } from "../types/ClientInfoInputsType";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { Client } from "../../types/clients";
import useClientUpdateQuery from "./useClientUpdateQuery";
import { useState } from "react";
import { getErrorMessage } from "../../../../../../share/utils/getErrorMessage";

const useClientsInfoValidation = ({ data }: { data: Client }) => {
  const { t } = useTranslation();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useClientUpdateQuery(data?.id);
  const initialValues = {
    joinDate: new Date(data?.created_at) || null,
    name: data?.name || "",
    last_name: data?.last_name || "",
    phone: data?.phone || "",
    birthDate: null,
    isVerified: false,
  };

  const validationSchema = Yup.object({
    // joinDate: Yup.date().required(t("required")).nullable(),
    name: Yup.string().required(t("required")),
    last_name: Yup.string().required(t("required")),
    // email: Yup.string()
    //   .email(t("invalid_email_format"))
    //   .required(t("required")),
    phone: Yup.string().required(t("required")),
    // birthDate: Yup.date().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        name: values.name,
        phone: values.phone,
        last_name: values.last_name,
      },
      {
        onSuccess: (response) => {
          setOpenSucsses(true);
          setMsg(response.data.message);
          formikHelpers.setSubmitting(false);
          // formikHelpers.resetForm();
        },
        onError: (error) => {
          setOpenError(true);
          setErrorMsg(getErrorMessage(error));
          formikHelpers.setSubmitting(false);
        },
      }
    );
  };
  return {
    initialValues,
    onSubmit,
    validationSchema,
    msg,
    openSucsses,
    setOpenSucsses,
    openError,
    errorMsg,
    setOpenError,
  };
};

export default useClientsInfoValidation;
