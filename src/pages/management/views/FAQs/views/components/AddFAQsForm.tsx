import { Form, Formik } from "formik";
import { AddFAQsFormProps } from "../types/AddFAQsFormProps";
import { Box } from "@mui/material";
import SubmitButton from "../../../../../../share/components/submitButton/SubmitButton";
import { useTranslation } from "react-i18next";
import Input from "../../../../../../share/components/Input/Input";

const AddFAQsForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddFAQsFormProps) => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <Input
            formik={formik}
            label={t("english_title")}
            name="englishTitle"
          />
          <Input formik={formik} label={t("aribic_title")} name="aribicTitle" />
          <Input
            formik={formik}
            label={t("english_description")}
            name="englishDescription"
            textarea={true}
          />
          <Input
            formik={formik}
            label={t("arabic_description")}
            name="arabicDescription"
            textarea={true}
          />
          <Input
            formik={formik}
            label={t("priority")}
            name="priority"
            type="number"
          />
          <Box sx={{ width: "200px" }}>
            <SubmitButton name={t("add")} disabled={!formik.isValid} />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AddFAQsForm;
