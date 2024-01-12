import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import OrdersHead from "../../../components/OrdersHead";
import useActiveOrdersContainerColumn from "../hooks/useActiveOrdersContainerColumn";
import useActiveOrdersContainerRows from "../hooks/useActiveOrdersContainerRows";

const ActiveOrdersContainer = () => {
  const { t } = useTranslation();
  const { columns } = useActiveOrdersContainerColumn();
  const { initialRows } = useActiveOrdersContainerRows();

  return (
    <Layout>
      <PaperContainer>
        <OrdersHead type="active" />
        <Table
          columns={columns}
          rows={initialRows}
          title={t("active_orders")}
          totalCount={5}
        />
      </PaperContainer>
    </Layout>
  );
};

export default ActiveOrdersContainer;
