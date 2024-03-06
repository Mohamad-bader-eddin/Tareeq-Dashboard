import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { initialValuesType } from "../types/AddVehicleFormType";
import useAddVehicleQuery from "./useAddVehicleQuery";
import { useState } from "react";
import { Vehicle } from "../../../types/Vehicles";
import useUpdateVehicleQuery from "../../info/hooks/useUpdateVehicleQuery";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";

const useAddVehicleFormValidation = ({ data }: { data?: Vehicle }) => {
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const { mutate } = useAddVehicleQuery();
  const { mutate: updateMutate } = useUpdateVehicleQuery();
  const initialValues = {
    name: data?.name || "",
    // priceByTime: Number(data?.price_by_time) || 0,
    // priceByKm: Number(data?.price_by_km) || 0,
    description: data?.description || "",
    image: data?.image || undefined,
    needNote: data?.need_note || false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("required")),
    // priceByTime: Yup.number().required(t("required")),
    // priceByKm: Yup.number().required(t("required")),
    description: Yup.string().required(t("required")),
    image: Yup.mixed()
      .test("fileSize", t("file_size_is_too_large"), (value) => {
        if (!value) return true;
        if (typeof value === "string") return true;
        return (value as File).size <= 5242880; // 5MB
      })
      .test("fileType", t("invalid_file_type"), (value) => {
        if (!value) return true;
        if (typeof value === "string") return true;
        const file = value as File;
        return (
          ["image/jpeg", "image/jpg", "image/png", "image/svg+xml"].includes(
            file.type
          ) ||
          file.name.endsWith(".jpeg") ||
          file.name.endsWith(".jpg") ||
          file.name.endsWith(".png") ||
          file.name.endsWith(".svg")
        );
      }),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    if (data) {
      updateMutate(
        {
          vehicleId: data.id as string,
          vehicle: {
            name: values.name,
            // price_by_time: values.priceByTime.toString(),
            // price_by_km: values.priceByKm.toString(),
            description: values.description,
            image: values.image as File,
            need_note: values.needNote,
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
          // price_by_time: values.priceByTime.toString(),
          // price_by_km: values.priceByKm.toString(),
          description: values.description,
          image: values.image as File,
          need_note: values.needNote,
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

export default useAddVehicleFormValidation;
