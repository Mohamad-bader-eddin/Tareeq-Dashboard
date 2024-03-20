import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/PushNotificationsFormType";
import useAddPushNotificationQuery from "./useAddPushNotificationQuery";
import { useState } from "react";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";

const usePushNotificationsFormValidation = () => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const { mutate } = useAddPushNotificationQuery();
  const initialValues = {
    userType: null,
    notification: null,
    user: null,
    driver: null,
    title: "",
    message: "",
  };

  const validationSchema = Yup.object({
    userType: Yup.object()
      .shape({
        id: Yup.string().required(t("required")),
        name: Yup.string().required(t("required")),
      })
      .required(t("required")),
    notification: Yup.object()
      .shape({
        id: Yup.string().required(t("required")),
        title: Yup.string().required(t("required")),
        message: Yup.string().required(t("required")),
      })
      .required(t("required")),
    title: Yup.string().required(t("required")),
    message: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        notification_template_id: values.notification?.id as string,
        type_id: values.userType?.id as string,
        id:
          values.userType?.name === "one-user"
            ? values.user?.id
            : values.driver?.id,
        description: values.message,
        title: values.title,
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

export default usePushNotificationsFormValidation;
