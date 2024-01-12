import { Form, Formik } from "formik";
import { PhoneFormProps } from "../types/phoneFormType";
import Input from "../../../share/components/Input/Input";
import { Box } from "@mui/material";
import SubmitButton from "../../../share/components/submitButton/SubmitButton";
import { useTranslation } from "react-i18next";

const PhoneForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: PhoneFormProps) => {
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
            <Input formik={formik} label={t("phone")} name="phone" />
            <Box sx={{ width: "200px" }}>
              <SubmitButton name={t("save")} disabled={!formik.isValid} />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PhoneForm;
