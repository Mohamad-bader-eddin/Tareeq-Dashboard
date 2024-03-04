import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { convertToTime } from "../../../../../../../share/utils/convertToTime";
import { useState } from "react";
import { format } from "date-fns";
import { getErrorMessage } from "../../../../../../../share/utils/getErrorMessage";
import { initialValuesType } from "../../add/types/OperationTimeFormType";
import { OperationTime } from "../../../types/OperationTime";
import useUpdateOperationTime from "./useUpdateOperationTime";

const useInfoOperationTimeFormValidation = ({
  data,
}: {
  data: OperationTime;
}) => {
  const { t } = useTranslation();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useUpdateOperationTime();
  // const alwaysRun = data?.find((el) => el.key === "always_run");

  const initialValues = {
    fromTime: convertToTime(data?.from) || null,
    toTime: convertToTime(data?.to) || null,
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
        id: data.id,
        from: format(values.fromTime as Date, "HH:mm:ss"),
        to: format(values.toTime as Date, "HH:mm:ss"),
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

export default useInfoOperationTimeFormValidation;
