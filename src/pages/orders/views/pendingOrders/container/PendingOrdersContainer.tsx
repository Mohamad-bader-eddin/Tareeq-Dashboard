import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import OrdersHead from "../../../components/OrdersHead";
import usePendingOrdersColumns from "../hooks/usePendingOrdersColumns";
import usePendingOrdersRows from "../hooks/usePendingOrdersRows";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import useAssignOrderToColumn from "../../../hooks/useAssignOrderToColumn";
import useAssignOrderToRows from "../../../hooks/useAssignOrderToRows";
import { useState } from "react";
import { GridRowId } from "@mui/x-data-grid";
import useAssignOrderQuery from "../../../hooks/useAssignOrderQuery";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import useDeiversQuery from "../../../../users/views/shoppers/hooks/useDeiversQuery";
import usePendingOrdersQuery from "../hooks/usePendingOrdersQuery";
import { Backdrop, Box, Stack, Typography } from "@mui/material";
import useManagementQuery from "../../../../management/hooks/useManagementQuery";
import Spinner from "../../../../../share/components/Spinner";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import useExportPendingOrdersQuery from "../hooks/useExportPendingOrdersQuery";

const PendingOrdersContainer = () => {
  const { mobileL } = useMedeaQueries();
  const [openAssignDialog, setOPenAssignDialog] = useState(false);
  const [idOrder, setIdOrder] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { data, isLoading, isFetching } = usePendingOrdersQuery();
  const { columns } = usePendingOrdersColumns({
    setOpen: setOPenAssignDialog,
    setIdOrder,
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
  const { data: driverData, isLoading: driverLoading } = useDeiversQuery();
  const { columns: AssignCol } = useAssignOrderToColumn({ handleAssignOrder });
  const { rows: AssignRow } = useAssignOrderToRows({
    data: driverData?.data.content,
  });
  const { t } = useTranslation();
  const { data: managementData, isLoading: managementLoading } =
    useManagementQuery();
  const { data: download } = useExportPendingOrdersQuery();
  const handleExportClick = () => {
    const url = window.URL.createObjectURL(new Blob([download?.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `pending orders.xlsx`); // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <PaperContainer>
        {managementLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <Spinner />
          </Backdrop>
        ) : null}
        <Stack
          direction={mobileL ? "column" : "row"}
          alignItems={mobileL ? "start" : "center"}
        >
          <OrdersHead data={managementData?.data.content} />
          <Box sx={{ marginInlineStart: mobileL ? "0" : "20px" }}>
            <ExportButton handleClick={handleExportClick} />
          </Box>
        </Stack>
        <Table
          columns={columns}
          rows={rows}
          title={t("pending_orders")}
          totalCount={data?.data.content.length}
          loading={isLoading || isFetching}
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
              <Table
                columns={AssignCol}
                rows={AssignRow}
                loading={driverLoading}
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
