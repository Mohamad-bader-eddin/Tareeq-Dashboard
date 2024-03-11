import PaperContainer from "../../../share/components/Paper/PaperContainer";
import Breadcrumb from "../../../share/components/breadcrumbs/Breadcrumb";
import Layout from "../../../share/components/layout/Layout";
import { Backdrop, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { StyledInfo } from "../style/InfoOrder.style";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";
import Table from "../../../share/components/table/Table";
// import useInfoOrderShoppersColumn from "../hooks/useInfoOrderShoppersColumn";
// import useInfoOrderShoppersRows from "../hooks/useInfoOrderShoppersRows";
import useInfoOrderLogColumn from "../hooks/useInfoOrderLogColumn";
import useInfoOrderLogRows from "../hooks/useInfoOrderLogRows";
import { useDarkMode } from "../../../context/DarkMode";
import { useParams } from "react-router-dom";
import useOrderQuery from "../hooks/useOrderQuery";
import Spinner from "../../../share/components/Spinner";
import useAdminNoteFormValidation from "../hooks/useAdminNoteFormValidation";
import AdminNoteForm from "../components/AdminNoteForm";
import GenericAlert from "../../../share/components/alert/GenericAlert";

const InfoOrder = () => {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode();
  // const { columns: shoppersCol } = useInfoOrderShoppersColumn();
  // const { initialRows: shopperRow } = useInfoOrderShoppersRows();
  const { type, id } = useParams();
  const { data, isLoading } = useOrderQuery(id as string);
  const {
    initialValues,
    onSubmit,
    validationSchema,
    errorMsg,
    msg,
    openError,
    openSucsses,
    setOpenError,
    setOpenSucsses,
  } = useAdminNoteFormValidation({
    id: id as string,
    adminNote: data?.data.content.admin_note,
  });
  const { columns: logCol } = useInfoOrderLogColumn();
  const { orderLogsRows } = useInfoOrderLogRows({ data: data?.data.content });

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
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <Spinner />
        </Backdrop>
      ) : (
        <>
          <PaperContainer>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              {t("info")} ( {t("order_no")} {data?.data?.content?.id} )
            </Typography>
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
                  <h5 className="val">
                    {" "}
                    {data?.data?.content?.distance_expected} - KM
                  </h5>
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
                  <h5 className="val">{data?.data?.content?.started_at}</h5>
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
                  <h5 className="val">
                    {" "}
                    {data?.data?.content?.arrive_to_customer_at}
                  </h5>
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
                  <h5 className="val">{data?.data?.content?.completed_at}</h5>
                </div>
                <div className="col-6">
                  <h5 className="atr">
                    <span>
                      <TripOriginOutlinedIcon sx={{ fontSize: "10px" }} />
                    </span>
                    {t("total_expected")} :
                  </h5>
                  <h5 className="val">{data?.data?.content?.total_expected}</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h5 className="atr">
                    <span>
                      <TripOriginOutlinedIcon sx={{ fontSize: "10px" }} />
                    </span>
                    {t("total_paid")} :
                  </h5>
                  <h5 className="val">{data?.data?.content?.total_paid}</h5>
                </div>
              </div>
            </StyledInfo>
          </PaperContainer>
          <PaperContainer>
            <Table
              columns={logCol}
              rows={orderLogsRows}
              title={t("order_log")}
              totalCount={data?.data?.content.activityLogs.length}
              loading={isLoading}
            />
          </PaperContainer>
        </>
      )}
      {/* <PaperContainer>
        <Table
          columns={shoppersCol}
          rows={shopperRow}
          title={t("shoppers")}
          totalCount={5}
          loading={false}
        />
      </PaperContainer> */}
      {type === "arrived" ? (
        isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <Spinner />
          </Backdrop>
        ) : (
          <PaperContainer>
            <Typography variant="h6" sx={{ marginBottom: "10px" }}>
              {t("admin_note")}
            </Typography>
            <AdminNoteForm
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            />
          </PaperContainer>
        )
      ) : null}
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
    </Layout>
  );
};

export default InfoOrder;
