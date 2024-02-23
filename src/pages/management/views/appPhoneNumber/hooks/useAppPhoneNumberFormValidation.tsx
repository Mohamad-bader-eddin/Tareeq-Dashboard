import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/AppPhoneNumberFormProps";
import { Management } from "../../../types";
import { useState } from "react";
import useUpdateManagementQuery from "../../../hooks/useUpdateManagementQuery";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";

const useAppPhoneNumberFormValidation = ({ data }: { data: Management[] }) => {
  const { t } = useTranslation();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useUpdateManagementQuery();
  const appPhone = data?.find((el) => el.key === "app_phone");
  const initialValues = {
    appPhoneNumber: appPhone?.value || "",
  };

  const validationSchema = Yup.object({
    appPhoneNumber: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        key: "app_phone",
        value: values.appPhoneNumber,
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

export default useAppPhoneNumberFormValidation;
