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
import useAdminNotesColumns from "../hooks/useAdminNotesColumns";
import useAdminNotesRows from "../hooks/useAdminNotesRows";
import useAdminNotesQuery from "../hooks/useAdminNotesQuery";
import { useEffect, useState } from "react";
import { GridRowId } from "@mui/x-data-grid";
import GenericDialog from "../../../share/components/Dialog/GenericDialog";
import { getErrorMessage } from "../../../share/utils/getErrorMessage";
import useDeleteAdminNote from "../hooks/useDeleteAdminNote";
import { convertPriceToSY } from "../../../share/utils/convertPriceToSY";

const InfoOrder = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openDeleteError, setOpenDeleteError] = useState(false);
  const [errorDeleteMsg, setErrorDeleteMsg] = useState("");
  const [openDeleteSucsses, setOpenDeleteSucsses] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState("");
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
  });
  const { columns: logCol } = useInfoOrderLogColumn();
  const { orderLogsRows } = useInfoOrderLogRows({ data: data?.data.content });
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const {
    data: adminNotesData,
    isLoading: adminNotesLoading,
    refetch,
  } = useAdminNotesQuery(id as string);
  const { columns: notesColumns } = useAdminNotesColumns({ handleOpenDialog });
  const { rows } = useAdminNotesRows({ data: adminNotesData?.data?.content });
  const { mutate, isLoading: deleteLoading } = useDeleteAdminNote();
  const handleAgree = () => {
    mutate(selectedId as GridRowId, {
      onSuccess: (response) => {
        setOpenDeleteSucsses(true);
        setDeleteMsg(response.data.message);
        setOpenDeleteDialog(false);
        refetch();
      },
      onError: (error) => {
        setOpenDeleteError(true);
        setErrorDeleteMsg(getErrorMessage(error));
        setOpenDeleteDialog(false);
      },
    });
  };

  useEffect(() => {
    if (type === "arrived") {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

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
                    {data?.data?.content?.real_distance} - KM
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
                  <h5 className="val">
                    {convertPriceToSY(data?.data?.content?.total_expected)}
                  </h5>
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
                  <h5 className="val">
                    {convertPriceToSY(data?.data?.content?.total_paid)}
                  </h5>
                </div>
                <div className="col-6">
                  <h5 className="atr">
                    <span>
                      <TripOriginOutlinedIcon sx={{ fontSize: "10px" }} />
                    </span>
                    {t("user_note")} :
                  </h5>
                  <h5 className="val">{data?.data?.content?.user_note}</h5>
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
          <>
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
            <PaperContainer>
              <Table
                columns={notesColumns}
                rows={rows}
                loading={adminNotesLoading}
                title={t("notes")}
                totalCount={adminNotesData?.data?.content.length}
              />
            </PaperContainer>
          </>
        )
      ) : null}
      <GenericDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        handleAgree={handleAgree}
        deleteType={true}
        agreeLoading={deleteLoading}
        elementContent={t("delete_message")}
      />
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
      <GenericAlert
        open={openDeleteSucsses}
        setOpen={setOpenDeleteSucsses}
        type="success"
        msg={deleteMsg}
      />
      <GenericAlert
        open={openDeleteError}
        setOpen={setOpenDeleteError}
        type="error"
        msg={errorDeleteMsg}
      />
    </Layout>
  );
};

export default InfoOrder;
