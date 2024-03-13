import { Form, Formik } from "formik";
import { AddNotificationFormType } from "../types/AddNotificationFormType";
import Input from "../../../../../../../share/components/Input/Input";
import { Box } from "@mui/material";
import SubmitButton from "../../../../../../../share/components/submitButton/SubmitButton";
import { useTranslation } from "react-i18next";

const AddNotificationForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddNotificationFormType) => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <Input formik={formik} label={t("title")} name="title" />
          <Input
            formik={formik}
            label={t("message")}
            name="message"
            textarea={true}
          />
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

export default AddNotificationForm;
