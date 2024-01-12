import { useTranslation } from "react-i18next";
import { Form, Formik } from "formik";
import UploadImage from "../../../../../share/components/uploadImage/UploadImage";
import { Box } from "@mui/material";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";
import { AddSlideFormType } from "../types/AddSlideFormType";

const AddSlideForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddSlideFormType) => {
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
          <Box sx={{ width: "200px" }}>
            <SubmitButton
              name={t("save")}
              disabled={!formik.isValid || formik.isSubmitting}
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AddSlideForm;
