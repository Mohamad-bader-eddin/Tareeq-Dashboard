import { Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import usePushNotificationsFormValidation from "../hooks/usePushNotificationsFormValidation";
import PushNotificationsForm from "../components/PushNotificationsForm";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";

const PushNotifications = () => {
  const { t } = useTranslation();
  const {
    initialValues,
    onSubmit,
    validationSchema,
    errorMsg,
    msg,
    openError,
    openSucsses,
    setOpenError,
    setOpenSucsses,
  } = usePushNotificationsFormValidation();
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("push_notifications")}
        </Typography>
        <PushNotificationsForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
        <GenericAlert
          open={openSucsses}
          setOpen={setOpenSucsses}
          type="success"
          msg={msg}
        />
        <GenericAlert
          open={openError}
          setOpen={setOpenError}
          type="error"
          msg={errorMsg}
        />
      </PaperContainer>
    </Layout>
  );
};

export default PushNotifications;
