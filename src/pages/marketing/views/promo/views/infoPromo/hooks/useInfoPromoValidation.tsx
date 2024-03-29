import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { initialValuesType } from "../../addPromoCode/types/AddPromoCodeFormType";
import useUpdatePromoQuery from "./useUpdatePromoQuery";
import { Promo } from "../../../types/promoType";
import { getErrorMessage } from "../../../../../../../share/utils/getErrorMessage";
import { format } from "date-fns";

const useInfoPromoValidation = ({ data }: { data: Promo }) => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const { mutate } = useUpdatePromoQuery();
  const initialValues = {
    code: data?.code || "",
    amount: data?.amount || "",
    description: data?.description || "",
    type: data?.type || "",
    isActive: data?.is_active ? "true" : "false",
    deadline_date: data?.deadline_date
      ? new Date(data.deadline_date)
      : undefined,
  };

  const validationSchema = Yup.object({
    code: Yup.string().required(t("required")),
    amount: Yup.string().required(t("required")),
    description: Yup.string().required(t("required")),
    type: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        promo: {
          id: data.id,
          code: values.code,
          amount: values.amount,
          description: values.description,
          is_active: values.isActive === "true" ? true : false,
          type: values.type,
          deadline_date: values.deadline_date
            ? format(values.deadline_date, "yyyy-MM-dd")
            : undefined,
        },
      },
      {
        onSuccess: (response) => {
          setOpenSucsses(true);
          setMsg(response.data.message);
          formikHelpers.setSubmitting(false);
          //   formikHelpers.resetForm();
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

export default useInfoPromoValidation;
