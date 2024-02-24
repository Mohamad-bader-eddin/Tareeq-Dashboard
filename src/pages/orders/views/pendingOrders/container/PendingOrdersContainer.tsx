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
import { Backdrop, Box, Typography } from "@mui/material";
import useManagementQuery from "../../../../management/hooks/useManagementQuery";
import Spinner from "../../../../../share/components/Spinner";

const PendingOrdersContainer = () => {
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
          const err = error as Error;
          setOpenError(true);
          setErrorMsg(err.message);
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
        <OrdersHead data={managementData?.data.content} />
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
