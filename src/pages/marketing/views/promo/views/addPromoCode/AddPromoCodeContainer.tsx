import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../../share/components/layout/Layout";
import { Typography } from "@mui/material";
import AddPromoCodeForm from "./components/AddPromoCodeForm";
import useAddPromoCodeValidation from "./hooks/useAddPromoCodeValidation";
import Breadcrumb from "../../../../../../share/components/breadcrumbs/Breadcrumb";
import GenericAlert from "../../../../../../share/components/alert/GenericAlert";

const AddPromoCodeContainer = () => {
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
  } = useAddPromoCodeValidation();
  const breadcrumbsTracks = [
    { path: "/dashboard/marketing/promo", name: t("promo") },
  ];

  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("add_promo_code")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("add_promo_code")}
        </Typography>
        <AddPromoCodeForm
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

export default AddPromoCodeContainer;
