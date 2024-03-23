import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/ShopperLimitFormType";
import { useState } from "react";
import useUpdateManagementQuery from "../../../hooks/useUpdateManagementQuery";
import { Management } from "../../../types";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";

const useShopperLimitFormValidation = ({ data }: { data: Management[] }) => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useUpdateManagementQuery();
  const radius = data?.find((el) => el.key === "auto_assign_radius");
  const { t } = useTranslation();
  const initialValues = {
    shopperLimit: radius?.value || "",
  };

  const validationSchema = Yup.object({
    shopperLimit: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        key: "auto_assign_radius",
        value: values.shopperLimit,
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

export default useShopperLimitFormValidation;
