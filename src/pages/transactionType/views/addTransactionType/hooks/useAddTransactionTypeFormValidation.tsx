import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { initialValuesType } from "../types/AddTransactionType";
import { TransactionType } from "../../../types/TransactionType";
import useAddTransactionTypeQuery from "./useAddTransactionTypeQuery";
import useUpdateTransactionTypeQuery from "../../infoTransactionType/hooks/useUpdateTransactionTypeQuery";

const useAddTransactionTypeFormValidation = ({
  data,
}: {
  data?: TransactionType;
}) => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const { mutate } = useAddTransactionTypeQuery();
  const { mutate: updateMutate } = useUpdateTransactionTypeQuery();
  const initialValues = {
    type: data?.type || "",
    description: data?.description || "",
  };

  const validationSchema = Yup.object().shape({
    type: Yup.string().required(t("required")),
    description: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    if (data) {
      updateMutate(
        {
          id: data.id,
          type: values.type,
          description: values.description,
        },
        {
          onSuccess: (response) => {
            setOpenSucsses(true);
            setMsg(response.data.message);
            formikHelpers.setSubmitting(false);
            // formikHelpers.resetForm();
          },
          onError: (error) => {
            const err = error as Error;
            setOpenError(true);
            setErrorMsg(err.message);
            formikHelpers.setSubmitting(false);
          },
        }
      );
    } else {
      mutate(
        {
          type: values.type,
          description: values.description,
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
    }
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

export default useAddTransactionTypeFormValidation;
