import { Form, Formik } from "formik";
import { P2pFormType } from "../types/P2pFormType";
import Input from "../../../../../share/components/Input/Input";
import { useTranslation } from "react-i18next";
import SelectInput from "../../../../../share/components/select/SelectInput";
import { Box } from "@mui/material";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";
import GenericMap from "../../../../../share/components/map/GenericMap";

const P2pForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: P2pFormType) => {
  const { t } = useTranslation();
  const options = [
    {
      value: "true",
      key: t("schedule"),
    },
    {
      value: "false",
      key: t("now"),
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
            <Input formik={formik} label={t("id")} name="id" />
            <Input formik={formik} label={t("full_name")} name="fullName" />
            <Input formik={formik} label={t("phone")} name="phone" />
            <Input
              formik={formik}
              label={t("source_location")}
              name="sourceLocation"
            />
            <GenericMap />
            <Input
              formik={formik}
              label={t("destination_location")}
              name="destinationLocation"
            />
            <GenericMap />
            <Input
              formik={formik}
              label={t("description")}
              name="description"
              textarea={true}
            />
            <SelectInput
              formik={formik}
              label={t("send_to_active_orders")}
              name="sendToActiveOrders"
              options={options}
            />
            <Box sx={{ width: "200px" }}>
              <SubmitButton name={t("add")} disabled={!formik.isValid} />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default P2pForm;
