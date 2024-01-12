import { Form, Formik } from "formik";
import Input from "../../../../../../../share/components/Input/Input";
import { useTranslation } from "react-i18next";
import SelectInput from "../../../../../../../share/components/select/SelectInput";
import SubmitButton from "../../../../../../../share/components/submitButton/SubmitButton";
import { Box } from "@mui/material";
import { AddPromoCodeFormType } from "../../addPromoCode/types/AddPromoCodeFormType";

const InfoPromoCodeForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddPromoCodeFormType) => {
  const { t } = useTranslation();
  const options = [
    {
      value: "true",
      key: t("active"),
    },
    {
      value: "false",
      key: t("disabled"),
    },
  ];
  const typeOptions = [
    {
      value: "once",
      key: t("once"),
    },
  ];
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <Input formik={formik} label={t("code")} name="code" />
            <Input formik={formik} label={t("amount")} name="amount" />
            <Input
              formik={formik}
              label={t("description")}
              name="description"
              textarea={true}
            />
            <SelectInput
              formik={formik}
              label={t("is_active")}
              name="isActive"
              options={options}
            />
            <SelectInput
              formik={formik}
              label={t("type")}
              name="type"
              options={typeOptions}
            />
            <Box sx={{ width: "200px" }}>
              <SubmitButton
                name={t("edit")}
                disabled={!formik.isValid || formik.isSubmitting}
              />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default InfoPromoCodeForm;
