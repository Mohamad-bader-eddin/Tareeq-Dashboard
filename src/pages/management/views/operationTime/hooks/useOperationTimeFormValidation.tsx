import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/OperationTimeFormType";
import { Management } from "../../../types";
import { convertToTime } from "../../../../../share/utils/convertToTime";
import useAddOperationTimeQuery from "./useAddOperationTimeQuery";
import { useState } from "react";
import { format } from "date-fns";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";

const useOperationTimeFormValidation = ({ data }: { data: Management[] }) => {
  const { t } = useTranslation();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useAddOperationTimeQuery();
  const from = data?.find((el) => el.key === "from");
  const to = data?.find((el) => el.key === "to_time");
  const alwaysRun = data?.find((el) => el.key === "always_run");

  const initialValues = {
    fromTime: convertToTime(from?.value as string) || null,
    toTime: convertToTime(to?.value as string) || null,
    isAlwaysRun: alwaysRun?.value === "true" ? true : false || false,
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
      [
        {
          key: "from",
          value: format(values.fromTime as Date, "HH:mm:ss"),
        },
        {
          key: "to_time",
          value: format(values.toTime as Date, "HH:mm:ss"),
        },
        {
          key: "always_run",
          value: values.isAlwaysRun ? "true" : "false",
        },
      ],
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
