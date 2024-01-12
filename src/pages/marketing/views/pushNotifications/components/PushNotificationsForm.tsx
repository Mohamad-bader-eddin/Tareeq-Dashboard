import { Form, Formik } from "formik";
import { PushNotificationsFormType } from "../types/PushNotificationsFormType";
import SelectInput from "../../../../../share/components/select/SelectInput";
import { useTranslation } from "react-i18next";
import Input from "../../../../../share/components/Input/Input";
import { Box } from "@mui/material";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";
import AutocompleteInput from "../../../../../share/components/autoComplete/AutocompleteInput";
import { top100Films } from "./FakeData";

const PushNotificationsForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: PushNotificationsFormType) => {
  const { t } = useTranslation();
  const options = [
    {
      value: "all",
      key: t("all"),
    },
    {
      value: "clients",
      key: t("clients"),
    },
    {
      value: "shoppers",
      key: t("shoppers"),
    },
    {
      value: "specifiedUser",
      key: t("specified_user"),
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
            <SelectInput
              formik={formik}
              label={t("user_type")}
              name="userType"
              options={options}
            />
            {formik.values.userType === "specifiedUser" && (
              <AutocompleteInput
                options={top100Films}
                label={t("search_user")}
                formik={formik}
                name="user"
                loading={false}
              />
            )}
            <Input formik={formik} label={t("title")} name="title" />
            <Input
              formik={formik}
              label={t("message")}
              name="message"
              textarea={true}
            />
            <Box sx={{ width: "200px" }}>
              <SubmitButton name={t("send")} disabled={!formik.isValid} />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PushNotificationsForm;
