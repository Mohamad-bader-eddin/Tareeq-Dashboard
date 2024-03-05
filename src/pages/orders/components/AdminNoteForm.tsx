import { Form, Formik } from "formik";
import { AdminNoteFormType } from "../types/AdminNoteFormType";
import Input from "../../../share/components/Input/Input";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import SubmitButton from "../../../share/components/submitButton/SubmitButton";

const AdminNoteForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AdminNoteFormType) => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <Input formik={formik} label={t("note")} name="note" />
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

export default AdminNoteForm;
