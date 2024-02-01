import { useTranslation } from "react-i18next";
import { AddTransactionType } from "../types/AddTransactionType";
import { Form, Formik } from "formik";
import Input from "../../../../../share/components/Input/Input";
import { Box } from "@mui/material";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";

const AddTransactionTypeForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddTransactionType) => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <Input formik={formik} label={t("type")} name="type" />
          <Input formik={formik} label={t("description")} name="description" />
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

export default AddTransactionTypeForm;
