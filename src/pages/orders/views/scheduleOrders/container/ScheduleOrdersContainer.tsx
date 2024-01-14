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

const ScheduleOrdersContainer = () => {
  const [openAssignDialog, setOPenAssignDialog] = useState(false);
  const { columns } = useScheduleOrdersColumns({
    setOpen: setOPenAssignDialog,
  });
  const { initialRows } = useScheduleOrdersRows();
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
          title={t("scheduled_orders")}
          totalCount={20}
          loading={false}
        />
        <GenericDialog
          open={openAssignDialog}
          setOpen={setOPenAssignDialog}
          fullScreen={true}
          handleAgree={() => {}}
          elementContent={
            <Table columns={AssignCol} rows={AssignRow} loading={false} />
          }
        />
      </PaperContainer>
    </Layout>
  );
};

export default ScheduleOrdersContainer;
