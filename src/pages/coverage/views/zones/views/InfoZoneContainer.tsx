import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import AddZoneForm from "./components/AddZoneForm";
import useAddZoneValidation from "./hooks/useAddZoneValidation";
import { Backdrop, Typography } from "@mui/material";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import { useParams } from "react-router-dom";
import useZoneQuery from "./hooks/useZoneQuery";
import Spinner from "../../../../../share/components/Spinner";

const InfoZoneContainer = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useZoneQuery(id as string);
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
  } = useAddZoneValidation({ data: data?.data.content });
  const breadcrumbsTracks = [{ path: "/coverage/zones", name: t("zones") }];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("info")} />
      <PaperContainer>
        <Typography variant="h5" sx={{ mb: "20px" }}>
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
          <AddZoneForm
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

export default InfoZoneContainer;
