import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import useAddPolygonValidation from "./hooks/useAddPolygonValidation";
import AddPolygonsForm from "./components/AddPolygonsForm";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";

const AddPolygonsContainer = () => {
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
  } = useAddPolygonValidation();
  const breadcrumbsTracks = [
    { path: "/dashboard/coverage/polygons", name: t("polygons") },
  ];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("add_polygon")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("add_polygon")}
        </Typography>
        <AddPolygonsForm
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

export default AddPolygonsContainer;
