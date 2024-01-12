import { Form, Formik } from "formik";
import { AddFundsFormType } from "../types/AddFundsFormType";
import Input from "../../../share/components/Input/Input";
import { useTranslation } from "react-i18next";
import SubmitButton from "../../../share/components/submitButton/SubmitButton";
import { Box } from "@mui/material";

const AddFundsForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddFundsFormType) => {
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
            <Input formik={formik} label={t("amount")} name="amount" />
            <Input
              formik={formik}
              label={t("description")}
              name="description"
              textarea={true}
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

export default AddFundsForm;
