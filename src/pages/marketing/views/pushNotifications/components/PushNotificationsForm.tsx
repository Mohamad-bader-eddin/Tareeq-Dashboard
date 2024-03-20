import { Form, Formik } from "formik";
import { PushNotificationsFormType } from "../types/PushNotificationsFormType";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";
import AutocompleteInput from "../../../../../share/components/autoComplete/AutocompleteInput";
import useUserTypeQuery from "../hooks/useUserTypeQuery";
import useUserTypeMapper from "../hooks/useUserTypeMapper";
import useClientsQuery from "../hooks/useClientsQuery";
import useClientMapper from "../hooks/useClientMapper";
import useDeiversQuery from "../hooks/useDeiversQuery";
import useDriverMapper from "../hooks/useDriverMapper";
import useNotificationsQuery from "../hooks/useNotificationsQuery";
import useNotificationsMapper from "../hooks/useNotificationsMapper";
import AutocompleteNotifications from "./AutocompleteNotifications";
import Input from "../../../../../share/components/Input/Input";

const PushNotificationsForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: PushNotificationsFormType) => {
  const { t } = useTranslation();
  const { data, isLoading } = useUserTypeQuery();
  const { options } = useUserTypeMapper({ data: data?.data.content });
  const { data: clientsData, isLoading: clientsIsLoading } = useClientsQuery();
  const { userOptions } = useClientMapper({ data: clientsData?.data.content });
  const { data: driverData, isLoading: driverLoading } = useDeiversQuery();
  const { driversOptions } = useDriverMapper({
    data: driverData?.data.content,
  });
  const { data: notificationData, isLoading: notificationLoading } =
    useNotificationsQuery();
  const { notificationsOptions } = useNotificationsMapper({
    data: notificationData?.data?.content,
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <AutocompleteInput
              formik={formik}
              label={t("user_type")}
              name="userType"
              options={options}
              loading={isLoading}
            />
            {formik.values.userType?.name === "one-user" && (
              <AutocompleteInput
                options={userOptions}
                label={t("search_user")}
                formik={formik}
                name="user"
                loading={clientsIsLoading}
              />
            )}
            {formik.values.userType?.name === "one-driver" && (
              <AutocompleteInput
                options={driversOptions}
                label={t("search_driver")}
                formik={formik}
                name="driver"
                loading={driverLoading}
              />
            )}
            <AutocompleteNotifications
              options={notificationsOptions}
              label={t("search_notification")}
              formik={formik}
              name="notification"
              loading={notificationLoading}
            />
            <Input formik={formik} label={t("title")} name="title" />
            <Input
              formik={formik}
              label={t("message")}
              name="message"
              textarea={true}
            />
            <Box sx={{ width: "200px" }}>
              <SubmitButton
                name={t("send")}
                disabled={!formik.isValid || formik.isSubmitting}
              />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PushNotificationsForm;
