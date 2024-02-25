import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { Location, initialValuesType } from "../types/AddPolygonsFormType";
import { useState } from "react";
import useAddPolugonQuery from "./useAddPolugonQuery";
import { getErrorMessage } from "../../../../../../share/utils/getErrorMessage";

const useAddPolygonValidation = () => {
  const { t } = useTranslation();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useAddPolugonQuery();
  const initialValues: initialValuesType = {
    zone: null,
    locations: [{} as Location],
  };

  const validationSchema = Yup.object().shape({
    zone: Yup.object()
      .shape({
        id: Yup.string().required(t("required")),
        name: Yup.string().required(t("required")),
      })
      .required(t("required")),
    // locations: Yup.array().of(
    //   Yup.object().shape({
    //     latitude: Yup.number()
    //       .min(-90, "Latitude must be at least -90")
    //       .max(90, "Latitude must be at most 90")
    //       .required("Latitude is required"),
    //     longitude: Yup.number()
    //       .min(-180, "Longitude must be at least -180")
    //       .max(180, "Longitude must be at most 180")
    //       .required("Longitude is required"),
    //   })
    // ),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    const polygons = values.locations.map((loc) => ({
      lat: loc.latitude,
      long: loc.longitude,
      zone_id: values.zone?.id as string,
    }));
    mutate(
      {
        polygons,
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
    console.log("Form Data :", polygons);
    formikHelpers.resetForm();
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

export default useAddPolygonValidation;
