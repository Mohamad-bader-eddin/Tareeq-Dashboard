import { Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import usePushNotificationsFormValidation from "../hooks/usePushNotificationsFormValidation";
import PushNotificationsForm from "../components/PushNotificationsForm";

const PushNotifications = () => {
  const { t } = useTranslation();
  const { initialValues, onSubmit, validationSchema } =
    usePushNotificationsFormValidation();
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h5" sx={{ mb: "20px" }}>
          {t("push_notifications")}
        </Typography>
        <PushNotificationsForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </PaperContainer>
    </Layout>
  );
};

export default PushNotifications;
