import { Backdrop, Box, Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { ClientInfo } from "./style/ViewLocationVote.style";
import { useDarkMode } from "../../../../../context/DarkMode";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import useLocationVoteQuery from "./hooks/useLocationVoteQuery";
import Spinner from "../../../../../share/components/Spinner";
import GenericEmbededMap from "../../../../../share/components/map/GenericEmbededMap";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import AppLink from "../../../../../share/components/link/AppLink";

const ViewLocationVote = () => {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useLocationVoteQuery(id as string);
  const breadcrumbsTracks = [
    { path: "/admin/coverage/location-votes", name: t("votes") },
  ];

  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("info")} />
      <PaperContainer>
        <Box>
          <Typography variant="h6" sx={{ marginBottom: "15px" }}>
            {t("view_location_vote")}
          </Typography>
          {isLoading ? (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={isLoading}
            >
              <Spinner />
            </Backdrop>
          ) : (
            <>
              <ClientInfo $darkMode={darkMode}>
                <h4 className="atr">
                  <span>
                    <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                  </span>
                  {t("client")} :
                </h4>
                <AppLink
                  name={data?.data.content.user.name}
                  path={`/admin/users/clients/${data?.data.content.user_id}`}
                />
                {/* <h4 className="val">{data?.data.content.user.name}</h4> */}
              </ClientInfo>
              <ClientInfo $darkMode={darkMode}>
                <h4 className="atr">
                  <span>
                    <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                  </span>
                  {t("source_location")} :
                </h4>
              </ClientInfo>
              <GenericEmbededMap
                lat={data?.data.content.source_lat}
                long={data?.data.content.source_long}
              />
            </>
          )}
          {/* <ClientInfo $darkMode={darkMode}>
            <h4 className="atr">
              <span>
                <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
              </span>
              {t("destination_location")} :
            </h4>
          </ClientInfo>
          <GenericMap /> */}
        </Box>
      </PaperContainer>
    </Layout>
  );
};

export default ViewLocationVote;
