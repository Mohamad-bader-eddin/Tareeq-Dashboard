import { Form, Formik } from "formik";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Input from "../../../../../share/components/Input/Input";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";
import { YoutubeFormTypesProps } from "../types/YoutubeFormType";

const YoutubeForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: YoutubeFormTypesProps) => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <Input formik={formik} label="Youtube Link" name="youtube" />
            <Box sx={{ width: "200px" }}>
              <SubmitButton
                name={t("save")}
                disabled={!formik.isValid || formik.isSubmitting}
              />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;
