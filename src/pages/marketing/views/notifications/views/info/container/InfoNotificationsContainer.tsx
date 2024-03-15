import { Backdrop, Typography } from "@mui/material";
import PaperContainer from "../../../../../../../share/components/Paper/PaperContainer";
import Breadcrumb from "../../../../../../../share/components/breadcrumbs/Breadcrumb";
import Layout from "../../../../../../../share/components/layout/Layout";
import AddNotificationForm from "../../add/components/AddNotificationForm";
import GenericAlert from "../../../../../../../share/components/alert/GenericAlert";
import { useTranslation } from "react-i18next";
import useUpdateNotificationsFormValidation from "../hooks/useUpdateNotificationsFormValidation";
import { useParams } from "react-router-dom";
import useNotificationQuery from "../hooks/useNotificationQuery";
import Spinner from "../../../../../../../share/components/Spinner";

const InfoNotificationsContainer = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useNotificationQuery(id as string);
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
  } = useUpdateNotificationsFormValidation({ data: data?.data.content });
  const breadcrumbsTracks = [
    { path: "/admin/marketing/notifications", name: t("info") },
  ];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("add_notification")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("info")}
        </Typography>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <Spinner />
          </Backdrop>
        ) : (
          <AddNotificationForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          />
        )}
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

export default InfoNotificationsContainer;
