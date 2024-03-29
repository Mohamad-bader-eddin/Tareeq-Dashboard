import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import useAddVehicleFormValidation from "../hooks/useAddVehicleFormValidation";
import { Typography } from "@mui/material";
import AddVehicleForm from "../components/AddVehicleForm";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";

const AddVehicleContainer = () => {
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
  } = useAddVehicleFormValidation({});
  const breadcrumbsTracks = [{ path: "/admin/vehicles", name: t("vehicles") }];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("add_vehicle")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("add_vehicle")}
        </Typography>
        <AddVehicleForm
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

export default AddVehicleContainer;
