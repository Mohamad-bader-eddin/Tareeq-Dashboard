import { useTranslation } from "react-i18next";
import Layout from "../../../../../../../share/components/layout/Layout";
import Breadcrumb from "../../../../../../../share/components/breadcrumbs/Breadcrumb";
import PaperContainer from "../../../../../../../share/components/Paper/PaperContainer";
import { Backdrop, Typography } from "@mui/material";
import GenericAlert from "../../../../../../../share/components/alert/GenericAlert";
import usePromoQuery from "../hooks/usePromoQuery";
import { useParams } from "react-router-dom";
import useInfoPromoValidation from "../hooks/useInfoPromoValidation";
import InfoPromoCodeForm from "../components/InfoPromoCodeForm";
import Spinner from "../../../../../../../share/components/Spinner";

const InfoPromoContainer = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = usePromoQuery(id as string);
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
  } = useInfoPromoValidation({ data: data?.data.content });
  const breadcrumbsTracks = [
    { path: "/admin/marketing/promo", name: t("promo") },
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
          <InfoPromoCodeForm
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

export default InfoPromoContainer;
