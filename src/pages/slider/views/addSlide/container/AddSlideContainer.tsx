import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import useAddSlideFormValidation from "../hooks/useAddSlideFormValidation";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import { Typography } from "@mui/material";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import AddSlideForm from "../components/AddSlideForm";

const AddSlideContainer = () => {
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
  } = useAddSlideFormValidation();
  const breadcrumbsTracks = [{ path: "/dashboard/slider", name: t("slider") }];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("add_slide")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("add_slide")}
        </Typography>
        <AddSlideForm
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

export default AddSlideContainer;
