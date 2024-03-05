import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
// import { useState } from "react";
import { initialValuesType } from "../types/AdminNoteFormType";

const useAdminNoteFormValidation = () => {
  const { t } = useTranslation();
  //   const [openError, setOpenError] = useState(false);
  //   const [errorMsg, setErrorMsg] = useState("");
  //   const [openSucsses, setOpenSucsses] = useState(false);
  //   const [msg, setMsg] = useState("");
  const initialValues = {
    note: "",
  };

  const validationSchema = Yup.object({
    note: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    console.log("Form Data :", values);
    formikHelpers.resetForm();
  };
  return {
    initialValues,
    validationSchema,
    onSubmit,
    // msg,
    // openSucsses,
    // setOpenSucsses,
    // openError,
    // errorMsg,
    // setOpenError,
  };
};

export default useAdminNoteFormValidation;
