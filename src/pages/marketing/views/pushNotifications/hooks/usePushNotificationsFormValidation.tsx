import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/PushNotificationsFormType";
import useAddPushNotificationQuery from "./useAddPushNotificationQuery";
import { useState } from "react";

const usePushNotificationsFormValidation = () => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const { mutate } = useAddPushNotificationQuery();
  const initialValues = {
    userType: null,
    title: "",
    message: "",
    user: null,
    driver: null,
  };

  const validationSchema = Yup.object({
    userType: Yup.object()
      .shape({
        id: Yup.string().required(t("required")),
        name: Yup.string().required(t("required")),
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
        description: values.message,
        title: values.title,
        type_id: values.userType?.id as string,
        id:
          values.userType?.name === "one-user"
            ? values.user?.id
            : values.driver?.id,
      },
      {
        onSuccess: (response) => {
          setOpenSucsses(true);
          setMsg(response.data.message);
          formikHelpers.setSubmitting(false);
          formikHelpers.resetForm();
        },
        onError: (error) => {
          const err = error as Error;
          setOpenError(true);
          setErrorMsg(err.message);
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
