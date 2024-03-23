import { Form, Formik } from "formik";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Input from "../../../../../share/components/Input/Input";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";
import { AddAdminFormProps } from "../types/AddAdminFormProps";
import PasswordInput from "./PasswordInput";

const AddAdminForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddAdminFormProps) => {
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
            <Input formik={formik} label={t("email")} name="email" />
            <PasswordInput
              formik={formik}
              label={t("password")}
              name="password"
            />
            <Input formik={formik} label={t("name")} name="name" />
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

export default AddAdminForm;
