import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { useTranslation } from "react-i18next";
import { Location, initialValuesType } from "../types/AddPolygonsFormType";

const useAddPolygonValidation = () => {
  const { t } = useTranslation();
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
    locations: Yup.array().of(
      Yup.object().shape({
        latitude: Yup.number()
          .min(-90, "Latitude must be at least -90")
          .max(90, "Latitude must be at most 90")
          .required("Latitude is required"),
        longitude: Yup.number()
          .min(-180, "Longitude must be at least -180")
          .max(180, "Longitude must be at most 180")
          .required("Longitude is required"),
      })
    ),
  });

  const onSubmit = (
    values: initialValuesType,
    formikHelpers: FormikHelpers<initialValuesType>
  ) => {
    console.log("Form Data :", values);
    formikHelpers.resetForm();
  };
  return { initialValues, validationSchema, onSubmit };
};

export default useAddPolygonValidation;
