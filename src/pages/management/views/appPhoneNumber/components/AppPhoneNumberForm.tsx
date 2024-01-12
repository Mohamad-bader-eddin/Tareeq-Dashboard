import { Form, Formik } from "formik";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Input from "../../../../../share/components/Input/Input";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";
import { AppPhoneNumberFormProps } from "../types/AppPhoneNumberFormProps";

const AppPhoneNumberForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AppPhoneNumberFormProps) => {
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
              label={t("app_phone_number")}
              name="appPhoneNumber"
            />
            <Box sx={{ width: "200px" }}>
              <SubmitButton name={t("save")} disabled={!formik.isValid} />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AppPhoneNumberForm;
