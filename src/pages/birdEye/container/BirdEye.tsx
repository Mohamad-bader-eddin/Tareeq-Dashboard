import { useTranslation } from "react-i18next";
import PaperContainer from "../../../share/components/Paper/PaperContainer";
import Layout from "../../../share/components/layout/Layout";
// import GenericMap from "../../../share/components/map/GenericMap";
import { Typography } from "@mui/material";
import MapWithPolygons from "../../../share/components/map/MapWithPolygons";

const BirdEye = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h5" sx={{ mb: "20px" }}>
          {t("bird_eye")}
        </Typography>
        {/* <GenericMap /> */}
        <MapWithPolygons />
      </PaperContainer>
    </Layout>
  );
};

export default BirdEye;
