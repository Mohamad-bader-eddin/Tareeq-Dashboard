import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import usePendingOrdersColumns from "../hooks/usePendingOrdersColumns";
import usePendingOrdersRows from "../hooks/usePendingOrdersRows";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import useAssignOrderToColumn from "../../../hooks/useAssignOrderToColumn";
import useAssignOrderToRows from "../../../hooks/useAssignOrderToRows";
import { useEffect, useState } from "react";
import { GridRowId } from "@mui/x-data-grid";
import useAssignOrderQuery from "../../../hooks/useAssignOrderQuery";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import usePendingOrdersQuery from "../hooks/usePendingOrdersQuery";
import { Box, Stack, Typography } from "@mui/material";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import useExportPendingOrdersQuery from "../hooks/useExportPendingOrdersQuery";
import { format } from "date-fns";
import ServerTable from "../../../../../share/components/table/ServerTable";
import { useNotifications } from "../../../../../context/Notifications";
import AdvanceSearchDialog from "../../../components/AdvanceSearchDialog";
import { OrderFilterType } from "../../../types/OrderQueryType";
import { useOtherNotifications } from "../../../../../context/OtherNotifications";
import useDriverOnlineQuery from "../../../hooks/useDriverOnlineQuery";

const PendingOrdersContainer = () => {
  const { mobileL } = useMedeaQueries();
  const [openAssignDialog, setOPenAssignDialog] = useState(false);
  const [idOrder, setIdOrder] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const [openAdvanceSearchDialog, setOpenAdvanceSearchDialog] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [queryParams, setQueryParams] = useState<OrderFilterType>(
    {} as OrderFilterType
  );
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const { data, isLoading, refetch } = usePendingOrdersQuery({
    page: paginationModel.page,
    limit: paginationModel.pageSize,
    orderNumber: queryParams.orderNumber,
    fromDate: queryParams.fromDate,
    toDate: queryParams.toDate,
    phone: queryParams.phone,
    name: queryParams.name,
  });
  const { columns } = usePendingOrdersColumns({
    setOpen: setOPenAssignDialog,
    setIdOrder,
    paginationModel,
  });
  const { rows } = usePendingOrdersRows({ data: data?.data.content });
  const { mutate } = useAssignOrderQuery();
  const handleAssignOrder = (id: GridRowId) => {
    mutate(
      {
        driver_id: id as string,
        order_id: idOrder as string,
      },
      {
        onSuccess: (response) => {
          setOpenSucsses(true);
          setMsg(response.data.message);
          setOPenAssignDialog(false);
        },
        onError: (error) => {
          setOpenError(true);
          setErrorMsg(getErrorMessage(error));
          setOPenAssignDialog(false);
        },
      }
    );
  };
  const [driverPaginationModel, setDriverPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const { data: driverData, isLoading: driverLoading } = useDriverOnlineQuery(
    driverPaginationModel.page,
    driverPaginationModel.pageSize
  );
  const { columns: AssignCol } = useAssignOrderToColumn({ handleAssignOrder });
  const { rows: AssignRow } = useAssignOrderToRows({
    data: driverData?.data.content,
  });
  const { t } = useTranslation();
  const { mutate: exportMutate, isLoading: exportLoading } =
    useExportPendingOrdersQuery();
  const [openDialog, setOpenDialog] = useState(false);
  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);
  const handleExportClick = () => {
    setOpenDialog((prev) => !prev);
  };
  const handleAgree = () => {
    exportMutate(
      {
        from: from ? format(from, "yyyy-MM-dd") : "",
        to: to ? format(to, "yyyy-MM-dd") : "",
      },
      {
        onSuccess: (response) => {
          const url = window.URL.createObjectURL(new Blob([response?.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `pending orders.xlsx`); // Set the filename
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setFrom(null);
          setTo(null);
          setOpenDialog(false);
        },
      }
    );
  };
  const handleSearchClick = () => {
    setOpenAdvanceSearchDialog((prev) => !prev);
  };
  const handleSearchAgree = () => {
    setQueryParams({
      fromDate: fromDate ? format(fromDate, "yyyy-MM-dd") : undefined,
      toDate: toDate ? format(toDate, "yyyy-MM-dd") : undefined,
      orderNumber: orderNumber,
      name: name,
      phone: phone,
    });
    refetch();
    setOpenAdvanceSearchDialog(false);
  };
  const { notification } = useNotifications();
  const { otherNotification } = useOtherNotifications();
  useEffect(() => {
    if (notification.length > 0 || otherNotification.length > 0) {
      refetch();
    }
  }, [notification, otherNotification, refetch]);

  return (
    <Layout>
      <PaperContainer>
        <Stack
          direction={mobileL ? "column" : "row"}
          alignItems={mobileL ? "start" : "center"}
        >
          <Box>
            <ExportButton
              handleClick={handleExportClick}
              openDialog={openDialog}
              setOpenDialog={setOpenDialog}
              from={from}
              setFrom={setFrom}
              to={to}
              setTo={setTo}
              handleAgree={handleAgree}
              agreeLoading={exportLoading}
            />
          </Box>
          <Box sx={{ marginInlineStart: "15px" }}>
            <AdvanceSearchDialog
              openDialog={openAdvanceSearchDialog}
              setOpenDialog={setOpenAdvanceSearchDialog}
              orderNumber={orderNumber}
              setOrderNumber={setOrderNumber}
              from={fromDate}
              setFrom={setFromDate}
              to={toDate}
              setTo={setToDate}
              phone={phone}
              setPhone={setPhone}
              name={name}
              setName={setName}
              handleAgree={handleSearchAgree}
              handleClick={handleSearchClick}
            />
          </Box>
        </Stack>
        <ServerTable
          columns={columns}
          rows={rows}
          title={t("pending_orders")}
          totalCount={data?.data.total}
          loading={isLoading}
          paginationModel={paginationModel}
          setPaginationModel={setPaginationModel}
          rowCount={data?.data.total}
        />
        <GenericDialog
          open={openAssignDialog}
          setOpen={setOPenAssignDialog}
          assignTo={true}
          hideAgreeBtn={true}
          elementContent={
            <Box>
              <Typography variant="body1">
                Assign Order ({idOrder}) To
              </Typography>
              <ServerTable
                columns={AssignCol}
                rows={AssignRow}
                loading={driverLoading}
                paginationModel={driverPaginationModel}
                setPaginationModel={setDriverPaginationModel}
                rowCount={driverData?.data.total}
              />
            </Box>
          }
          handleAgree={() => setOPenAssignDialog(false)}
        />
        <GenericAlert
          open={openError}
          setOpen={setOpenError}
          type="error"
          msg={errorMsg}
        />
        <GenericAlert
          open={openSucsses}
          setOpen={setOpenSucsses}
          type="success"
          msg={msg}
        />
      </PaperContainer>
    </Layout>
  );
};

export default PendingOrdersContainer;
