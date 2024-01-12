import { useTranslation } from "react-i18next";
import { AddVehicleFormType } from "../types/AddVehicleFormType";
import { Form, Formik } from "formik";
import UploadImage from "../../../../../share/components/uploadImage/UploadImage";
import Input from "../../../../../share/components/Input/Input";
import { Box } from "@mui/material";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";

const AddVehicleForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddVehicleFormType) => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <UploadImage formik={formik} name="image" title={t("image")} />
          <Input formik={formik} label={t("name")} name="name" />
          <Input
            formik={formik}
            label={t("price_by_time")}
            name="priceByTime"
            type="number"
          />
          <Input
            formik={formik}
            label={t("price_by_km")}
            name="priceByKm"
            type="number"
          />
          <Input
            formik={formik}
            label={t("description")}
            name="description"
            textarea={true}
          />
          <Box sx={{ width: "200px" }}>
            <SubmitButton
              name={t("save")}
              disabled={!formik.isValid || formik.isSubmitting}
              // isSubmitting={isSubmitting}
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AddVehicleForm;
