import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/ShopperInfoFormType";
import { Drivers } from "../../../types/Drivers";
import useUpdateDriverQuery from "./useUpdateDriverQuery";
import { getErrorMessage } from "../../../../../../../share/utils/getErrorMessage";
import { useState } from "react";

const useShopperInfoFormValidation = ({ data }: { data: Drivers }) => {
  const { t } = useTranslation();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useUpdateDriverQuery();

  const initialValues = {
    registerDate: new Date(data?.created_at as Date),
    name: data?.name || "",
    last_name: data?.last_name || "",
    driverProfit: data?.driver_profit || "",
    phone: data?.phone || "",
    zone:
      {
        id: data?.zone?.id as string,
        name: data?.zone?.name as string,
      } || null,
    modelNumber: data?.vehicle?.model_number || "",
    brand: data?.vehicle?.brand || "",
    platNumber: data?.vehicle?.plat_number || "",
    minifactureYear: data?.vehicle?.minifacture_year || "",
    color: data?.vehicle?.color || "",
    description: data?.vehicle?.description || "",
    vehicleType:
      {
        id: data?.vehicle?.vehicle_type?.id as string,
        name: data?.vehicle?.vehicle_type?.name as string,
      } || null,
    carPicture: data?.vehicle?.image || undefined,
    // isOnline: false,
    shopperPicture: data?.image || undefined,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("required")),
    last_name: Yup.string().required(t("required")),
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
    driverProfit: Yup.string().required(t("required")),
    minifactureYear: Yup.string().required(t("required")),
    color: Yup.string().required(t("required")),
    description: Yup.string().required(t("required")),
    vehicleType: Yup.object()
      .shape({
        id: Yup.string().required(t("required")),
        name: Yup.string().required(t("required")),
      })
      .required(t("required")),
    carPicture: Yup.mixed()
      .test("fileSize", t("file_size_is_too_large"), (value) => {
        if (!value || typeof value === "string") return true;
        return (value as File).size <= 5242880; // 5MB
      })
      .test("fileType", t("invalid_file_type"), (value) => {
        if (!value || typeof value === "string") return true;
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
        if (!value || typeof value === "string") return true;
        return (value as File).size <= 5242880; // 5MB
      })
      .test("fileType", t("invalid_file_type"), (value) => {
        if (!value || typeof value === "string") return true;
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
        id: data.id,
        name: values.name,
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
        vehicle_image:
          typeof values.carPicture === "string"
            ? undefined
            : (values.carPicture as File),
        driver_image:
          typeof values.shopperPicture === "string"
            ? undefined
            : (values.shopperPicture as File),
        last_name: values.last_name,
        vehicle_id: data.vehicle?.id,
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

export default useShopperInfoFormValidation;
