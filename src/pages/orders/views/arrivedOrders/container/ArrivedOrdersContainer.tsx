import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import OrdersHead from "../../../components/OrdersHead";
import useArrivedOrdersColumns from "../hooks/useArrivedOrdersColumns";
import useArrivedOrdersRows from "../hooks/useArrivedOrdersRows";

const ArrivedOrdersContainer = () => {
  const { columns } = useArrivedOrdersColumns();
  const { initialRows } = useArrivedOrdersRows();
  const { t } = useTranslation();
  return (
    <Layout>
      <PaperContainer>
        <OrdersHead />
        <Table
          columns={columns}
          rows={initialRows}
          title={t("arrived_orders")}
          totalCount={1000}
          loading={false}
        />
      </PaperContainer>
    </Layout>
  );
};

export default ArrivedOrdersContainer;
