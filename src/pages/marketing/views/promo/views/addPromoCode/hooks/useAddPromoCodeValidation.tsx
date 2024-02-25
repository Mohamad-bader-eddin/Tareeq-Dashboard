import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/AddPromoCodeFormType";
import { useState } from "react";
import useAddPromoQuery from "./useAddPromoQuery";
import { getErrorMessage } from "../../../../../../../share/utils/getErrorMessage";

const useAddPromoCodeValidation = () => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const { mutate } = useAddPromoQuery();
  const initialValues = {
    code: "",
    amount: "",
    description: "",
    type: "",
    isActive: "false",
  };

  const validationSchema = Yup.object({
    code: Yup.string().required(t("required")),
    amount: Yup.string().required(t("required")),
    description: Yup.string().required(t("required")),
    type: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        code: values.code,
        amount: values.amount,
        description: values.description,
        is_active: Boolean(values.isActive),
        type: values.type,
      },
      {
        onSuccess: (response) => {
          setOpenSucsses(true);
          setMsg(response.data.message);
          formikHelpers.setSubmitting(false);
          formikHelpers.resetForm();
        },
        onError: (error) => {
          setOpenError(true);
          setErrorMsg(getErrorMessage(error));
          formikHelpers.setSubmitting(false);
        },
      }
    );
    // console.log("Form Data :", values);
    // formikHelpers.resetForm();
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

export default useAddPromoCodeValidation;
