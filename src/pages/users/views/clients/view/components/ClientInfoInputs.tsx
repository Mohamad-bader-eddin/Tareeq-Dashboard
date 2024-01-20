import { Form, Formik } from "formik";
import DateInput from "../../../../../../share/components/date/DateInput";
import { ClientInfoInputsProps } from "../types/ClientInfoInputsType";
import SubmitButton from "../../../../../../share/components/submitButton/SubmitButton";
import Input from "../../../../../../share/components/Input/Input";
import SelectInput from "../../../../../../share/components/select/SelectInput";
import { Box } from "@mui/material";
import GenericMap from "../../../../../../share/components/map/GenericMap";
import { useTranslation } from "react-i18next";

const ClientInfoInputs = ({
  initialValues,
  onSubmit,
  validationSchema,
}: ClientInfoInputsProps) => {
  const { t } = useTranslation();

  const options = [
    {
      value: "true",
      key: t("verified"),
    },
    {
      value: "false",
      key: t("not_verified"),
    },
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <DateInput
              formik={formik}
              label={t("join_date")}
              name="joinDate"
              disabled={true}
            />
            <Input formik={formik} label={t("name")} name="name" />
            <Input formik={formik} label={t("phone")} name="phone" />
            <DateInput
              formik={formik}
              label={t("birth_date")}
              name="birthDate"
            />
            <SelectInput
              formik={formik}
              label={t("is_verified?")}
              name="isVerified"
              options={options}
            />
            <GenericMap />
            <Box sx={{ width: "200px" }}>
              <SubmitButton name={t("save")} disabled={!formik.isValid} />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ClientInfoInputs;
