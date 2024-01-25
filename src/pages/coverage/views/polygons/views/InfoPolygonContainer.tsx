import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import useAddPolygonValidation from "./hooks/useAddPolygonValidation";
import AddPolygonsForm from "./components/AddPolygonsForm";

const InfoPolygonContainer = () => {
  const { t } = useTranslation();
  const { initialValues, onSubmit, validationSchema } =
    useAddPolygonValidation();
  const breadcrumbsTracks = [
    { path: "/dashboard/coverage/polygons", name: t("polygons") },
  ];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("info")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("info")}
        </Typography>
        <AddPolygonsForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </PaperContainer>
    </Layout>
  );
};

export default InfoPolygonContainer;
