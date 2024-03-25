import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useUpdateManagementQuery from "../../../hooks/useUpdateManagementQuery";
import { Management } from "../../../types";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";
import { initialValuesType } from "../types/WhatsappFormType";

const useWhatsappFormValidation = ({ data }: { data: Management[] }) => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useUpdateManagementQuery();
  const whatsapp = data?.find((el) => el.key === "whatsapp");
  const { t } = useTranslation();
  const initialValues = {
    whatsapp: whatsapp?.value || "",
  };

  const validationSchema = Yup.object({
    whatsapp: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        key: "whatsapp",
        value: values.whatsapp,
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

export default useWhatsappFormValidation;
