import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/CreateShopperFormType";
import { useState } from "react";
import useCreateDriverQuery from "./useCreateDriverQuery";

const useCreateShopperValidation = () => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useCreateDriverQuery();
  const { t } = useTranslation();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    zone: null,
    modelNumber: "",
    brand: "",
    platNumber: "",
    minifactureYear: "",
    color: "",
    description: "",
    vehicleType: null,
    shopperPicture: undefined,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("required")),
    email: Yup.string()
      .email(t("invalid_email_format"))
      .required(t("required")),
    password: Yup.string().required(t("required")),
    phone: Yup.string().required(t("required")),
    zone: Yup.object()
      .shape({
        id: Yup.string().required(t("required")),
        name: Yup.string().required(t("required")),
      })
      .required(t("required")),
    modelNumber: Yup.string().required(t("required")),
    brand: Yup.string().required(t("required")),
    platNumber: Yup.string().required(t("required")),
    minifactureYear: Yup.string().required(t("required")),
    color: Yup.string().required(t("required")),
    description: Yup.string().required(t("required")),
    vehicleType: Yup.object()
      .shape({
        id: Yup.string().required(t("required")),
        name: Yup.string().required(t("required")),
      })
      .required(t("required")),
    // carPicture: Yup.mixed()
    //   .required(t("image_is_required"))
    //   .test("fileSize", t("file_size_is_too_large"), (value) => {
    //     if (!value) return false;
    //     return (value as File).size <= 5242880; // 5MB
    //   })
    //   .test("fileType", t("invalid_file_type"), (value) => {
    //     if (!value) return false;
    //     const file = value as File;
    //     return (
    //       ["image/jpeg", "image/jpg", "image/png"].includes(file.type) ||
    //       file.name.endsWith(".jpeg") ||
    //       file.name.endsWith(".jpg") ||
    //       file.name.endsWith(".png")
    //     );
    //   }),
    // shopperPicture: Yup.mixed()
    //   .required(t("image_is_required"))
    //   .test("fileSize", t("file_size_is_too_large"), (value) => {
    //     if (!value) return false;
    //     return (value as File).size <= 5242880; // 5MB
    //   })
    //   .test("fileType", t("invalid_file_type"), (value) => {
    //     if (!value) return false;
    //     const file = value as File;
    //     return (
    //       ["image/jpeg", "image/jpg", "image/png"].includes(file.type) ||
    //       file.name.endsWith(".jpeg") ||
    //       file.name.endsWith(".jpg") ||
    //       file.name.endsWith(".png")
    //     );
    //   }),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    mutate(
      {
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        brand: values.brand,
        color: values.color,
        model_number: values.modelNumber,
        minifacture_year: values.minifactureYear,
        plat_number: values.platNumber,
        description: values.description,
        vehicle_type_id: values.vehicleType?.id as string,
        zone_id: values.zone?.id as string,
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
    console.log("Form Data :", values);
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

export default useCreateShopperValidation;
