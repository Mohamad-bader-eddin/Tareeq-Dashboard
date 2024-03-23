import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/CreateShopperFormType";
import { useState } from "react";
import useCreateDriverQuery from "./useCreateDriverQuery";
import { getErrorMessage } from "../../../../../../../share/utils/getErrorMessage";

const useCreateShopperValidation = () => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useCreateDriverQuery();
  const { t } = useTranslation();
  const initialValues = {
    name: "",
    last_name: "",
    password: "",
    phone: "",
    driverProfit: "",
    zone: null,
    modelNumber: "",
    brand: "",
    platNumber: "",
    minifactureYear: "",
    color: "",
    description: "",
    vehicleType: null,
    shopperPicture: undefined,
    vehiclePicture: undefined,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("required")),
    // email: Yup.string()
    //   .email(t("invalid_email_format"))
    //   .required(t("required")),
    driverProfit: Yup.string().required(t("required")),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one digit")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .required(t("required")),
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
    vehiclePicture: Yup.mixed()
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
    shopperPicture: Yup.mixed()
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
        name: values.name,
        // email: values.email,
        password: values.password,
        phone: values.phone,
        brand: values.brand,
        color: values.color,
        driver_profit: values.driverProfit,
        model_number: values.modelNumber,
        minifacture_year: values.minifactureYear,
        plat_number: values.platNumber,
        description: values.description,
        vehicle_type_id: values.vehicleType?.id as string,
        zone_id: values.zone?.id as string,
        vehicle_image: values.vehiclePicture as File,
        driver_image: values.shopperPicture as File,
        last_name: values.last_name,
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
    // console.log("Form Data :", values);
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
