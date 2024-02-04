import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDarkMode } from "../../../../../context/DarkMode";

const InfoPolygonContainer = () => {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode();
  const { id } = useParams();
  const breadcrumbsTracks = [
    { path: "/admin/coverage/polygons", name: t("polygons") },
  ];
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage({ darkMode }, "*");
    }
  }, [darkMode]);
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("info")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("info")}
        </Typography>
        <Box height={"600px"}>
          <iframe
            ref={iframeRef}
            src={`https://edit-polygons.netlify.app/?id=${id}`}
            title="Iframe Title"
            width={"100%"}
            height={"597.6px"}
            style={{ border: "0", background: "transparent" }}
          />
        </Box>
      </PaperContainer>
    </Layout>
  );
};

export default InfoPolygonContainer;
