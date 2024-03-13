import { useTranslation } from "react-i18next";
import Layout from "../../../../../../../share/components/layout/Layout";
import Breadcrumb from "../../../../../../../share/components/breadcrumbs/Breadcrumb";
import PaperContainer from "../../../../../../../share/components/Paper/PaperContainer";
import AddNotificationForm from "../components/AddNotificationForm";
import useAddNotificationsFormValidation from "../hooks/useAddNotificationsFormValidation";
import GenericAlert from "../../../../../../../share/components/alert/GenericAlert";
import { Typography } from "@mui/material";

const AddNotificationsContainer = () => {
  const { t } = useTranslation();
  const {
    initialValues,
    onSubmit,
    validationSchema,
    errorMsg,
    openError,
    setOpenError,
    msg,
    openSucsses,
    setOpenSucsses,
  } = useAddNotificationsFormValidation();
  const breadcrumbsTracks = [
    { path: "/admin/marketing/notifications", name: t("notifications") },
  ];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("add_notification")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("add_notification")}
        </Typography>
        <AddNotificationForm
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

export default AddNotificationsContainer;
