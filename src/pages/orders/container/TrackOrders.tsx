import { Typography } from "@mui/material";
import PaperContainer from "../../../share/components/Paper/PaperContainer";
import Layout from "../../../share/components/layout/Layout";
import Breadcrumb from "../../../share/components/breadcrumbs/Breadcrumb";
import { useTranslation } from "react-i18next";
import GenericMap from "../../../share/components/map/GenericMap";
import { useParams } from "react-router-dom";

const TrackOrders = () => {
  const { t } = useTranslation();
  const { type } = useParams();
  const track = () => {
    switch (type) {
      case "active":
        return {
          path: "/dashboard/orders/active-orders",
          name: t("active_orders"),
        };
      case "pending":
        return {
          path: "/dashboard/orders/pending-orders",
          name: t("pending_orders"),
        };
      case "arrived":
        return {
          path: "/dashboard/orders/arrived-orders",
          name: t("arrived_orders"),
        };
      case "canceled":
        return {
          path: "/dashboard/orders/canceled-orders",
          name: t("canceled_orders"),
        };
      case "schedule":
        return {
          path: "/dashboard/orders/scheduled-orders",
          name: t("scheduled_orders"),
        };
      default:
        return {
          path: "/dashboard/orders/pending-orders",
          name: t("pending_orders"),
        };
    }
  };
  const breadcrumbsTracks = [track()];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("track_order")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ marginBottom: "15px" }}>
          {t("track_order")}
        </Typography>
        <GenericMap />
      </PaperContainer>
    </Layout>
  );
};

export default TrackOrders;
