import { Box, Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { ClientInfo } from "./style/ViewLocationVote.style";
import { useDarkMode } from "../../../../../context/DarkMode";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import GenericMap from "../../../../../share/components/map/GenericMap";

const ViewLocationVote = () => {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation();
  const location = useLocation();
  const clientName = location.state?.clientName || "";

  return (
    <Layout>
      <PaperContainer>
        <Box>
          <Typography variant="h5" sx={{ marginBottom: "15px" }}>
            {t("view_location_vote")}
          </Typography>
          <ClientInfo $darkMode={darkMode}>
            <h4 className="atr">
              <span>
                <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
              </span>
              {t("client")} :
            </h4>
            <h4 className="val">{clientName}</h4>
          </ClientInfo>
          <ClientInfo $darkMode={darkMode}>
            <h4 className="atr">
              <span>
                <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
              </span>
              {t("source_location")} :
            </h4>
          </ClientInfo>
          <GenericMap />
          <ClientInfo $darkMode={darkMode}>
            <h4 className="atr">
              <span>
                <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
              </span>
              {t("destination_location")} :
            </h4>
          </ClientInfo>
          <GenericMap />
        </Box>
      </PaperContainer>
    </Layout>
  );
};

export default ViewLocationVote;
