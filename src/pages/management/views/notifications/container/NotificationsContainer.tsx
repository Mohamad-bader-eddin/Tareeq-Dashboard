import { Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import NotificationsForm from "../components/NotificationsForm";
import useNotificationsFormValidation from "../hooks/useNotificationsFormValidation";
import { useTranslation } from "react-i18next";

const NotificationsContainer = () => {
  const { t } = useTranslation();
  const { initialValues, onSubmit } = useNotificationsFormValidation();
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "15px" }}>
          {t("notifications")}
        </Typography>
        <NotificationsForm initialValues={initialValues} onSubmit={onSubmit} />
      </PaperContainer>
    </Layout>
  );
};

export default NotificationsContainer;
