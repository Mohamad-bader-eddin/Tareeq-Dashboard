import PaperContainer from "../../../share/components/Paper/PaperContainer";
import Breadcrumb from "../../../share/components/breadcrumbs/Breadcrumb";
import Layout from "../../../share/components/layout/Layout";
import { Backdrop, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { StyledInfo } from "../style/InfoOrder.style";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";
// import Table from "../../../share/components/table/Table";
// import useInfoOrderShoppersColumn from "../hooks/useInfoOrderShoppersColumn";
// import useInfoOrderShoppersRows from "../hooks/useInfoOrderShoppersRows";
// import useInfoOrderLogColumn from "../hooks/useInfoOrderLogColumn";
// import useInfoOrderLogRows from "../hooks/useInfoOrderLogRows";
import { useDarkMode } from "../../../context/DarkMode";
import { useParams } from "react-router-dom";
import useOrderQuery from "../hooks/useOrderQuery";
import Spinner from "../../../share/components/Spinner";

const InfoOrder = () => {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode();
  // const { columns: shoppersCol } = useInfoOrderShoppersColumn();
  // const { initialRows: shopperRow } = useInfoOrderShoppersRows();
  // const { columns: logCol } = useInfoOrderLogColumn();
  // const { initialRows: logRow } = useInfoOrderLogRows();
  const { type, id } = useParams();
  const { data, isLoading } = useOrderQuery(id as string);

  const track = () => {
    switch (type) {
      case "active":
        return {
          path: "/admin/orders/active-orders",
          name: t("active_orders"),
        };
      case "pending":
        return {
          path: "/admin/orders/pending-orders",
          name: t("pending_orders"),
        };
      case "arrived":
        return {
          path: "/admin/orders/arrived-orders",
          name: t("arrived_orders"),
        };
      case "canceled":
        return {
          path: "/admin/orders/canceled-orders",
          name: t("canceled_orders"),
        };
      case "schedule":
        return {
          path: "/admin/orders/scheduled-orders",
          name: t("scheduled_orders"),
        };
      default:
        return {
          path: "/admin/orders/pending-orders",
          name: t("pending_orders"),
        };
    }
  };
  const breadcrumbsTracks = [track()];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("info")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          {t("info")} ( {t("order_no")} {data?.data?.content?.id} )
        </Typography>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <Spinner />
          </Backdrop>
        ) : (
          <StyledInfo $darkMode={darkMode}>
            <div className="row">
              <div className="col-6">
                <h5 className="atr">
                  <span>
                    <TripOriginOutlinedIcon sx={{ fontSize: "10px" }} />
                  </span>
                  {t("expected_distance")} :
                </h5>
                <h5 className="val">
                  {data?.data?.content?.distance_expected} KM
                </h5>
              </div>
              <div className="col-6">
                <h5 className="atr">
                  <span>
                    <TripOriginOutlinedIcon sx={{ fontSize: "10px" }} />
                  </span>
                  {t("real_distance")} :
                </h5>
                <h5 className="val"> - KM</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5 className="atr">
                  <span>
                    <TripOriginOutlinedIcon sx={{ fontSize: "10px" }} />
                  </span>
                  {t("placed_on")} :
                </h5>
                <h5 className="val">{data?.data?.content?.created_at}</h5>
              </div>
              <div className="col-6">
                <h5 className="atr">
                  <span>
                    <TripOriginOutlinedIcon sx={{ fontSize: "10px" }} />
                  </span>
                  {t("assigned_at")} :
                </h5>
                <h5 className="val">2023-09-30 15:35:53</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5 className="atr">
                  <span>
                    <TripOriginOutlinedIcon sx={{ fontSize: "10px" }} />
                  </span>
                  {t("accepted_at")} :
                </h5>
                <h5 className="val">{data?.data?.content?.accepted_at}</h5>
              </div>
              <div className="col-6">
                <h5 className="atr">
                  <span>
                    <TripOriginOutlinedIcon sx={{ fontSize: "10px" }} />
                  </span>
                  {t("arrive_to_customer_location")} :
                </h5>
                <h5 className="val"> {data?.data?.content?.completed_at}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5 className="atr">
                  <span>
                    <TripOriginOutlinedIcon sx={{ fontSize: "10px" }} />
                  </span>
                  {t("arrived_at")} :
                </h5>
                <h5 className="val">2023-09-30 15:35:53</h5>
              </div>
            </div>
          </StyledInfo>
        )}
      </PaperContainer>
      {/* <PaperContainer>
        <Table
          columns={shoppersCol}
          rows={shopperRow}
          title={t("shoppers")}
          totalCount={5}
          loading={false}
        />
      </PaperContainer>
      <PaperContainer>
        <Table
          columns={logCol}
          rows={logRow}
          title={t("order_log")}
          totalCount={5}
          loading={false}
        />
      </PaperContainer> */}
    </Layout>
  );
};

export default InfoOrder;
