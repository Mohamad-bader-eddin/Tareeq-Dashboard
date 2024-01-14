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

const PendingOrdersContainer = () => {
  const [openAssignDialog, setOPenAssignDialog] = useState(false);
  const { columns } = usePendingOrdersColumns({ setOpen: setOPenAssignDialog });
  const { initialRows } = usePendingOrdersRows();
  const { columns: AssignCol } = useAssignOrderToColumn();
  const { initialRows: AssignRow } = useAssignOrderToRows();
  const { t } = useTranslation();

  return (
    <Layout>
      <PaperContainer>
        <OrdersHead />
        <Table
          columns={columns}
          rows={initialRows}
          title={t("pending_orders")}
          totalCount={5}
          loading={false}
        />
        <GenericDialog
          open={openAssignDialog}
          setOpen={setOPenAssignDialog}
          fullScreen={true}
          elementContent={
            <Table columns={AssignCol} rows={AssignRow} loading={false} />
          }
          handleAgree={() => {}}
        />
      </PaperContainer>
    </Layout>
  );
};

export default PendingOrdersContainer;
