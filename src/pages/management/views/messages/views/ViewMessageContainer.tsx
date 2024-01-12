import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../../../../context/DarkMode";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { StyledInfo } from "../../../../orders/style/InfoOrder.style";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import { Typography } from "@mui/material";

const ViewMessageContainer = () => {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation();
  const breadcrumbsTracks = [
    { path: "/management/messsages", name: t("messsages") },
  ];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("view_message")} />
      <PaperContainer>
        <Typography variant="h5" sx={{ marginBottom: "15px" }}>
          {t("view_message")}
        </Typography>
        <StyledInfo $darkMode={darkMode}>
          <div className="row">
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("created_at")} :
              </h4>
              <h4 className="val">2023-09-30 15:35:53</h4>
            </div>
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("first_name")} :
              </h4>
              <h4 className="val">Ahmad</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("last_name")} :
              </h4>
              <h4 className="val">Ali</h4>
            </div>
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("phone")} :
              </h4>
              <h4 className="val">093333333</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("email")} :
              </h4>
              <h4 className="val">test@test.com</h4>
            </div>
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("messsage")} :
              </h4>
              <h4 className="val">test message</h4>
            </div>
          </div>
        </StyledInfo>
      </PaperContainer>
    </Layout>
  );
};

export default ViewMessageContainer;
