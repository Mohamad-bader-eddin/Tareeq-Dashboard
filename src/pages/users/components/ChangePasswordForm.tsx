import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import { ChangePasswordType } from "../types/ChangePasswordType";
import Input from "../../../share/components/Input/Input";
import SubmitButton from "../../../share/components/submitButton/SubmitButton";

const ChangePasswordForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: ChangePasswordType) => {
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
            <Input
              formik={formik}
              label={t("new_password")}
              name="newPassword"
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
