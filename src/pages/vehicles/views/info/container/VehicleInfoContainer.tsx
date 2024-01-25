import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import { Backdrop, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useVehicleQuery from "../hooks/useVehicleQuery";
import useAddVehicleFormValidation from "../../addVehicle/hooks/useAddVehicleFormValidation";
import Spinner from "../../../../../share/components/Spinner";
import AddVehicleForm from "../../addVehicle/components/AddVehicleForm";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";

const VehicleInfoContainer = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useVehicleQuery(id as string);

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
  } = useAddVehicleFormValidation({ data: data?.data.content });
  const breadcrumbsTracks = [
    { path: "/dashboard/vehicles", name: t("vehicles") },
  ];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("info")} />
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
          <AddVehicleForm
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

export default VehicleInfoContainer;
