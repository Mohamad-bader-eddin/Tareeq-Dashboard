import { useState } from "react";
import useScheduleOrdersColumns from "../hooks/useScheduleOrdersColumns";
import useScheduleOrdersRows from "../hooks/useScheduleOrdersRows";
import useAssignOrderToColumn from "../../../hooks/useAssignOrderToColumn";
import useAssignOrderToRows from "../../../hooks/useAssignOrderToRows";
import Layout from "../../../../../share/components/layout/Layout";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import OrdersHead from "../../../components/OrdersHead";
import Table from "../../../../../share/components/table/Table";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import { useTranslation } from "react-i18next";
import { GridRowId } from "@mui/x-data-grid";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import useDeiversQuery from "../../../../users/views/shoppers/hooks/useDeiversQuery";
import useAssignOrderQuery from "../../../hooks/useAssignOrderQuery";
import useScheduleOrdersQuery from "../hooks/useScheduleOrdersQuery";
import useManagementQuery from "../../../../management/hooks/useManagementQuery";
import { Backdrop, Box, Stack, Typography } from "@mui/material";
import Spinner from "../../../../../share/components/Spinner";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";

const ScheduleOrdersContainer = () => {
  const { mobileL } = useMedeaQueries();
  const [openAssignDialog, setOPenAssignDialog] = useState(false);
  const [idOrder, setIdOrder] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { data, isLoading, isFetching } = useScheduleOrdersQuery();
  const { columns } = useScheduleOrdersColumns({
    setOpen: setOPenAssignDialog,
    setIdOrder,
  });
  const { rows } = useScheduleOrdersRows({ data: data?.data.content });
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
  const { columns: AssignCol } = useAssignOrderToColumn({
    handleAssignOrder,
  });
  const { rows: AssignRow } = useAssignOrderToRows({
    data: driverData?.data.content,
  });
  const { t } = useTranslation();
  const { data: managementData, isLoading: managementLoading } =
    useManagementQuery();

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
            <ExportButton handleClick={() => {}} />
          </Box>
        </Stack>
        <Table
          columns={columns}
          rows={rows}
          title={t("scheduled_orders")}
          totalCount={data?.data.content.length}
          loading={isLoading || isFetching}
        />
        <GenericDialog
          open={openAssignDialog}
          setOpen={setOPenAssignDialog}
          fullScreen={true}
          assignTo={true}
          handleAgree={() => {}}
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

export default ScheduleOrdersContainer;
