import { Form, Formik } from "formik";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ShopperLimitFormProps } from "../types/ShopperLimitFormType";
import Input from "../../../../../share/components/Input/Input";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";

const ShopperLimitForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: ShopperLimitFormProps) => {
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
              label={t("auto_assign_radius")}
              name="shopperLimit"
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

export default ShopperLimitForm;
