import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/OperationTimeFormType";
import useAddOperationTimeQuery from "./useAddOperationTimeQuery";
import { useState } from "react";
import { format } from "date-fns";
import { getErrorMessage } from "../../../../../../../share/utils/getErrorMessage";

const useOperationTimeFormValidation = () => {
  const { t } = useTranslation();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useAddOperationTimeQuery();

  const initialValues = {
    fromTime: null,
    toTime: null,
  };

  const validationSchema = Yup.object({
    fromTime: Yup.date().required(t("required")),
    toTime: Yup.date().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        from: format(values.fromTime as Date, "HH:mm:ss"),
        to: format(values.toTime as Date, "HH:mm:ss"),
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

export default useOperationTimeFormValidation;
