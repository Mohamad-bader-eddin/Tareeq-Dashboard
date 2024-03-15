import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { initialValuesType } from "../../add/types/AddNotificationFormType";
import { Notifications } from "../../../types/NotificationsType";
import useUpdateNotificationQuery from "./useUpdateNotificationQuery";
import { getErrorMessage } from "../../../../../../../share/utils/getErrorMessage";

const useUpdateNotificationsFormValidation = ({
  data,
}: {
  data: Notifications;
}) => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const { mutate } = useUpdateNotificationQuery();
  const initialValues = {
    title: data?.title || "",
    message: data?.description || "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required(t("required")),
    message: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        id: data.id,
        description: values.message,
        title: values.title,
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
    validationSchema,
    onSubmit,
    msg,
    openSucsses,
    setOpenSucsses,
    openError,
    errorMsg,
    setOpenError,
  };
};

export default useUpdateNotificationsFormValidation;
