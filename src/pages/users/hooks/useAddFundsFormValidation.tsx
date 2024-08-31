import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/AddFundsFormType";
import useAddFundsWalletQuery from "./useAddFundsWalletQuery";
import { useState } from "react";
import useInfoDriverQuery from "../views/shoppers/views/info/hooks/useInfoDriverQuery";

const useAddFundsFormValidation = (id: string) => {
  const { t } = useTranslation();
  const { refetch } = useInfoDriverQuery(id as string);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useAddFundsWalletQuery();
  const initialValues = {
    amount: "",
    order_id:null,
    transactionType: null,
  };
  const validationSchema = Yup.object({
    amount: Yup.string().required(t("required")),
    order_id:Yup.number().positive().integer().nullable(),
    transactionType: Yup.object()
      .shape({
        id: Yup.string().required(t("required")),
        name: Yup.string().required(t("required")),
      })
      .required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        amount: values.amount as string,
        order_id:values.order_id,
        transaction_type_id: values.transactionType?.id as string,
        driver_id: id,
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

export default useAddFundsFormValidation;
