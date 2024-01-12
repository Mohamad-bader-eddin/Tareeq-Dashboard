import { Form, Formik } from "formik";
import { AddZoneFormProps } from "../types/AddZoneFormType";
import Input from "../../../../../../share/components/Input/Input";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import SubmitButton from "../../../../../../share/components/submitButton/SubmitButton";

const AddZoneForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddZoneFormProps) => {
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
            <Input formik={formik} label={t("name")} name="name" />
            <Box sx={{ width: "200px" }}>
              <SubmitButton name={t("save")} disabled={!formik.isValid} />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddZoneForm;
