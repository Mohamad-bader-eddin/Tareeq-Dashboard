import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { initialValuesType } from "../../addSlide/types/AddSlideFormType";
import useUpdateSlideQuery from "./useUpdateSlideQuery";
import { Slider } from "../../../types/sliderType";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";

const useUpdateSlideFormValidation = ({ data }: { data: Slider }) => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const { mutate } = useUpdateSlideQuery();
  const initialValues = {
    image: data?.image || undefined,
  };

  const validationSchema = Yup.object().shape({
    image: Yup.mixed()
      .required(t("image_is_required"))
      .test("fileSize", t("file_size_is_too_large"), (value) => {
        if (!value) return true;
        return (value as File).size <= 5242880; // 5MB
      })
      .test("fileType", t("invalid_file_type"), (value) => {
        if (!value) return true;
        const file = value as File;
        return (
          ["image/jpeg", "image/jpg", "image/png"].includes(file.type) ||
          file.name.endsWith(".jpeg") ||
          file.name.endsWith(".jpg") ||
          file.name.endsWith(".png")
        );
      }),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        slideId: data.id as string,
        image: values.image as File,
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
    console.log("Form Data :", values);
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

export default useUpdateSlideFormValidation;
