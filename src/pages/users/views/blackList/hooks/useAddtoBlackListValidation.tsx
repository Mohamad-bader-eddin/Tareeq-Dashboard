import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/AddtoBlackListType";
import useAddBlackListQuery from "./useAddBlackListQuery";
import { useState } from "react";
import useBlackListQuery from "./useBlackListQuery";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";

const useAddtoBlackListValidation = () => {
  const { t } = useTranslation();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useAddBlackListQuery();
  const { refetch } = useBlackListQuery();
  const initialValues = {
    phone: "",
  };
  const validationSchema = Yup.object({
    phone: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      { phone: values.phone },
      {
        onSuccess: (response) => {
          setOpenSucsses(true);
          setMsg(response.data.message);
          formikHelpers.setSubmitting(false);
          formikHelpers.resetForm();
          refetch();
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

export default useAddtoBlackListValidation;
