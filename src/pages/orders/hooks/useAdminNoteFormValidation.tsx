import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
// import { useState } from "react";
import { initialValuesType } from "../types/AdminNoteFormType";
import useUpdateAdminNoteQuery from "./useUpdateAdminNoteQuery";
import { getErrorMessage } from "../../../share/utils/getErrorMessage";
import { useState } from "react";

const useAdminNoteFormValidation = ({
  id,
  adminNote,
}: useAdminNoteFormValidationProps) => {
  const { t } = useTranslation();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useUpdateAdminNoteQuery();
  const initialValues = {
    note: adminNote || "",
  };

  const validationSchema = Yup.object({
    note: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        admin_note: values.note,
        id: id,
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

type useAdminNoteFormValidationProps = {
  id: string;
  adminNote?: string;
};

export default useAdminNoteFormValidation;
