import { useTranslation } from "react-i18next";
import useCanceledOrdersColumns from "../hooks/useCanceledOrdersColumns";
import useCanceledOrdersRows from "../hooks/useCanceledOrdersRows";
import Layout from "../../../../../share/components/layout/Layout";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import OrdersHead from "../../../components/OrdersHead";
import Table from "../../../../../share/components/table/Table";

const CanceledOrdersContainer = () => {
  const { t } = useTranslation();
  const { columns } = useCanceledOrdersColumns();
  const { initialRows } = useCanceledOrdersRows();
  return (
    <Layout>
      <PaperContainer>
        <OrdersHead />
        <Table
          columns={columns}
          rows={initialRows}
          title={t("canceled_orders")}
          totalCount={200}
          loading={false}
        />
      </PaperContainer>
    </Layout>
  );
};

export default CanceledOrdersContainer;
