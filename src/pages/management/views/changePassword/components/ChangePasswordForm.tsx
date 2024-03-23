import { Form, Formik } from "formik";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";
import { ChangePasswordFormValidationProps } from "../types/ChangePasswordFormValidationProps";
import PasswordInput from "./PasswordInput";

const ChangePasswordForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: ChangePasswordFormValidationProps) => {
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
            <PasswordInput
              formik={formik}
              label={t("password")}
              name="password"
            />
            <PasswordInput
              formik={formik}
              label={t("password_confirmation")}
              name="password_confirmation"
            />
            <PasswordInput
              formik={formik}
              label={t("old_password")}
              name="old_password"
            />
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

export default ChangePasswordForm;
