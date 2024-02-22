import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { initialValuesType } from "../types/phoneFormType";
import { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import useClientByPhoneQuery from "./useClientByPhoneQuery";
import { getErrorMessage } from "../../../share/utils/getErrorMessage";
import { Client } from "../../users/views/clients/types/clients";

const usePhoneValidation = ({ setPhone }: usePhoneValidationProps) => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { t } = useTranslation();
  const { mutate } = useClientByPhoneQuery();
  const initialValuesPhone = {
    phone: "",
  };

  const validationSchemaPhone = Yup.object({
    phone: Yup.string().required(t("required")),
  });

  const onSubmitPhone = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(values.phone, {
      onSuccess: (response) => {
        setPhone(response.data.content);
        formikHelpers.setSubmitting(false);
        formikHelpers.resetForm();
      },
      onError: (error) => {
        setOpenError(true);
        setErrorMsg(getErrorMessage(error));
        formikHelpers.setSubmitting(false);
      },
    });
    // console.log("Form Data :", values);
    // setPhone(values.phone);
    // formikHelpers.resetForm();
  };
  return {
    initialValuesPhone,
    validationSchemaPhone,
    onSubmitPhone,
    errorMsg,
    openError,
    setOpenError,
  };
};

type usePhoneValidationProps = {
  setPhone: Dispatch<SetStateAction<Client | null>>;
};

export default usePhoneValidation;
