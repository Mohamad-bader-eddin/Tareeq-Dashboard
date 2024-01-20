import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/ShopperInfoFormType";
import { Drivers } from "../../../types/Drivers";

const useShopperInfoFormValidation = ({ data }: { data: Drivers }) => {
  const { t } = useTranslation();

  const initialValues = {
    registerDate: new Date(data?.created_at as Date),
    name: data?.name || "",
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
    // shopperPicture: undefined,
    // isOnline: false,
    // shopperPicture: undefined,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("required")),
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
