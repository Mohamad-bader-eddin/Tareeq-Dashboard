import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import AddZoneForm from "./components/AddZoneForm";
import useAddZoneValidation from "./hooks/useAddZoneValidation";
import { Typography } from "@mui/material";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";

const AddZoneContainer = () => {
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
  } = useAddZoneValidation({});
  const breadcrumbsTracks = [{ path: "/coverage/zones", name: t("zones") }];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("add_zone")} />
      <PaperContainer>
        <Typography variant="h5" sx={{ mb: "20px" }}>
          {t("add_zone")}
        </Typography>
        <AddZoneForm
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

export default AddZoneContainer;
