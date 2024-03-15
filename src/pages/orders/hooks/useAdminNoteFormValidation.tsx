import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
// import { useState } from "react";
import { initialValuesType } from "../types/AdminNoteFormType";
import useUpdateAdminNoteQuery from "./useUpdateAdminNoteQuery";
import { getErrorMessage } from "../../../share/utils/getErrorMessage";
import { useState } from "react";
import useAdminNotesQuery from "./useAdminNotesQuery";
import { useAuth } from "../../../context/Auth";

const useAdminNoteFormValidation = ({
  id,
}: useAdminNoteFormValidationProps) => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useUpdateAdminNoteQuery();
  const { refetch } = useAdminNotesQuery(id);
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
    mutate(
      {
        title: values.note,
        order_id: id,
        admin_id: user?.id as string,
      },
      {
        onSuccess: (response) => {
          setOpenSucsses(true);
          setMsg(response.data.message);
          refetch();
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

type useAdminNoteFormValidationProps = {
  id: string;
};

export default useAdminNoteFormValidation;
