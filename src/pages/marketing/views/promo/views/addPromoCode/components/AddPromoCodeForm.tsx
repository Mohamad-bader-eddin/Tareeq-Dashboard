import { Form, Formik } from "formik";
import { AddPromoCodeFormType } from "../types/AddPromoCodeFormType";
import Input from "../../../../../../../share/components/Input/Input";
import { useTranslation } from "react-i18next";
import SelectInput from "../../../../../../../share/components/select/SelectInput";
import SubmitButton from "../../../../../../../share/components/submitButton/SubmitButton";
import { Box } from "@mui/material";
import DateInput from "../../../../../../../share/components/date/DateInput";

const AddPromoCodeForm = ({
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
      key: t("discount"),
    },
    {
      value: "period",
      key: t("promo_with_deadline"),
    },
    {
      value: "always",
      key: t("cash_back"),
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
            {formik.values?.type === "period" && (
              <DateInput
                formik={formik}
                label={t("deadline")}
                name="deadline_date"
              />
            )}
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

export default AddPromoCodeForm;
