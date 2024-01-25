import { Typography } from "@mui/material";
import PaperContainer from "../../../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../../../share/components/layout/Layout";
import CreateNewShopperForm from "../components/CreateNewShopperForm";
import useCreateShopperValidation from "../hooks/useCreateShopperValidation";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../../../../../../share/components/breadcrumbs/Breadcrumb";
import GenericAlert from "../../../../../../../share/components/alert/GenericAlert";

const CreateShopperContainer = () => {
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
  } = useCreateShopperValidation();
  const breadcrumbsTracks = [
    { path: "/dashboard/users/shoppers", name: t("drivers") },
  ];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("add_new_shopper")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("add_new_shopper")}
        </Typography>
        <CreateNewShopperForm
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

export default CreateShopperContainer;
