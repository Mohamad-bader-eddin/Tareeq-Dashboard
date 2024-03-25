import { Form, Formik } from "formik";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Input from "../../../../../share/components/Input/Input";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";
import { WhatsappFormTypesProps } from "../types/WhatsappFormType";

const WhatsappForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: WhatsappFormTypesProps) => {
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
            <Input formik={formik} label="WhatsApp Number" name="whatsapp" />
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

export default WhatsappForm;
