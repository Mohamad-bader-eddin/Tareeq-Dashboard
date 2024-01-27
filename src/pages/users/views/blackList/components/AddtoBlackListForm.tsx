import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import { AddtoBlackListType } from "../types/AddtoBlackListType";
import Input from "../../../../../share/components/Input/Input";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";

const AddtoBlackListForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddtoBlackListType) => {
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
              label={t("add_phone_to_black_list")}
              name="phone"
            />
            <Box sx={{ width: "200px" }}>
              <SubmitButton
                name={t("add")}
                disabled={!formik.isValid || formik.isSubmitting}
              />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddtoBlackListForm;
