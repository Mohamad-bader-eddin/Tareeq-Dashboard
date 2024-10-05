import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { initialValuesType } from "../../../../types/AddFundsFormType";
import useAddFundsWalletQuery from "./useAddFundsWalletQuery";
import useClientInfoQuery from "./useClientInfoQuery";
import { getErrorMessage } from "../../../../../../share/utils/getErrorMessage";

const useAddFundsFormValidation = (id: string) => {
  const { t } = useTranslation();
  const { refetch } = useClientInfoQuery(id as string);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useAddFundsWalletQuery();
  const initialValues = {
    amount: "",
    order_id:"",
    transactionType: null,
  };
  const validationSchema = Yup.object({
    amount: Yup.string().required(t("required")),
    order_id:Yup.number().positive().nullable(),
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
        order_id: values.order_id as string,
        transaction_type_id: values.transactionType?.id as string,
        user_id: id,
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
