import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/ShopperInfoFormType";
import { Drivers } from "../../../types/Drivers";
import { Option } from "../../../../../../../share/types";

const useShopperInfoFormValidation = ({
  data,
  zoneOptions,
  vehiclesOptions,
}: {
  data: Drivers;
  zoneOptions: Option[];
  vehiclesOptions: Option[];
}) => {
  const { t } = useTranslation();

  const initialValues = {
    registerDate: new Date(data?.created_at as Date),
    name: data?.name || "",
    email: data?.email || "",
    phone: data?.phone || "",
    zone: zoneOptions.find((option) => option.id === data?.zone_id) || null,
    modelNumber: data?.model_number || "",
    brand: data?.brand || "",
    platNumber: data?.plat_number || "",
    minifactureYear: data?.minifacture_year || "",
    color: data?.color || "",
    description: data?.description || "",
    vehicleType:
      vehiclesOptions.find((option) => option.id === data?.vehicle_type_id) ||
      null,
    // shopperPicture: undefined,
    // isOnline: false,
    // shopperPicture: undefined,
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
    // carType: Yup.string().required(t("required")),
    // carDescription: Yup.string().required(t("required")),
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
    console.log("Form Data :", values);
    formikHelpers.resetForm();
  };
  return { initialValues, onSubmit, validationSchema };
};

export default useShopperInfoFormValidation;
