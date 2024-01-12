import PaperContainer from "../../../share/components/Paper/PaperContainer";
import Breadcrumb from "../../../share/components/breadcrumbs/Breadcrumb";
import Layout from "../../../share/components/layout/Layout";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { StyledInfo } from "../style/InfoOrder.style";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";
import Table from "../../../share/components/table/Table";
import useInfoOrderShoppersColumn from "../hooks/useInfoOrderShoppersColumn";
import useInfoOrderShoppersRows from "../hooks/useInfoOrderShoppersRows";
import useInfoOrderLogColumn from "../hooks/useInfoOrderLogColumn";
import useInfoOrderLogRows from "../hooks/useInfoOrderLogRows";
import { useDarkMode } from "../../../context/DarkMode";
import { useParams } from "react-router-dom";

const InfoOrder = () => {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode();
  const { columns: shoppersCol } = useInfoOrderShoppersColumn();
  const { initialRows: shopperRow } = useInfoOrderShoppersRows();
  const { columns: logCol } = useInfoOrderLogColumn();
  const { initialRows: logRow } = useInfoOrderLogRows();
  const { type } = useParams();
  const track = () => {
    switch (type) {
      case "active":
        return { path: "/orders/active-orders", name: t("active_orders") };
      case "pending":
        return { path: "/orders/pending-orders", name: t("pending_orders") };
      case "arrived":
        return { path: "/orders/arrived-orders", name: t("arrived_orders") };
      case "canceled":
        return {
          path: "/orders/canceled-orders",
          name: t("canceled_orders"),
        };
      case "schedule":
        return {
          path: "/orders/scheduled-orders",
          name: t("scheduled_orders"),
        };
      default:
        return { path: "/orders/pending-orders", name: t("pending_orders") };
    }
  };
  const breadcrumbsTracks = [track()];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("info")} />
      <PaperContainer>
        <Typography variant="h5" sx={{ marginBottom: "15px" }}>
          {t("info")} ( {t("order_no")} 31840 )
        </Typography>
        <StyledInfo $darkMode={darkMode}>
          <div className="row">
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("expected_distance")} :
              </h4>
              <h4 className="val">4.676 KM</h4>
            </div>
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("real_distance")} :
              </h4>
              <h4 className="val">1.66511 KM</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("placed_on")} :
              </h4>
              <h4 className="val">2023-09-30 15:35:53</h4>
            </div>
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("assigned_at")} :
              </h4>
              <h4 className="val">2023-09-30 15:35:53</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("accepted_at")} :
              </h4>
              <h4 className="val">2023-09-30 15:35:53</h4>
            </div>
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("arrive_to_customer_location")} :
              </h4>
              <h4 className="val">2023-09-30 15:35:53</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h4 className="atr">
                <span>
                  <TripOriginOutlinedIcon sx={{ fontSize: "15px" }} />
                </span>
                {t("arrived_at")} :
              </h4>
              <h4 className="val">2023-09-30 15:35:53</h4>
            </div>
          </div>
        </StyledInfo>
      </PaperContainer>
      <PaperContainer>
        <Table
          columns={shoppersCol}
          rows={shopperRow}
          title={t("shoppers")}
          totalCount={5}
        />
      </PaperContainer>
      <PaperContainer>
        <Table
          columns={logCol}
          rows={logRow}
          title={t("order_log")}
          totalCount={5}
        />
      </PaperContainer>
    </Layout>
  );
};

export default InfoOrder;
