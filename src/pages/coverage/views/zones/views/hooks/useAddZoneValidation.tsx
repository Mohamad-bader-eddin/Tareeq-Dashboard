import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/AddZoneFormType";
import useAddZoneQuery from "./useAddZoneQuery";
import { useState } from "react";
import { Zone } from "../../types/ZoneType";
import useUpdateZoneQuery from "./useUpdateZoneQuery";
import { getErrorMessage } from "../../../../../../share/utils/getErrorMessage";

const useAddZoneValidation = ({ data }: { data?: Zone }) => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const { mutate: updateZone } = useUpdateZoneQuery();
  const { mutate } = useAddZoneQuery();
  const initialValues = {
    name: data?.name || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("required")),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    if (data) {
      updateZone(
        {
          zone: {
            id: data.id,
            name: values.name,
          },
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
    } else {
      mutate(
        {
          name: values.name,
        },
        {
          onSuccess: (response) => {
            setOpenSucsses(true);
            setMsg(response.data.message);
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
    }
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

export default useAddZoneValidation;
