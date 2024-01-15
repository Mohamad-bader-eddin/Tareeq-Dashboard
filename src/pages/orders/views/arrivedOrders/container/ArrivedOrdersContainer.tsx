import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import OrdersHead from "../../../components/OrdersHead";
import useArrivedOrdersColumns from "../hooks/useArrivedOrdersColumns";
import useArrivedOrdersRows from "../hooks/useArrivedOrdersRows";
import useOrdersQuery from "../../../hooks/useOrdersQuery";

const ArrivedOrdersContainer = () => {
  const { data, isLoading } = useOrdersQuery();
  const { columns } = useArrivedOrdersColumns();
  const { rows } = useArrivedOrdersRows({ data: data?.data.content });
  const { t } = useTranslation();
  return (
    <Layout>
      <PaperContainer>
        <OrdersHead />
        <Table
          columns={columns}
          rows={rows}
          title={t("arrived_orders")}
          totalCount={1000}
          loading={isLoading}
        />
      </PaperContainer>
    </Layout>
  );
};

export default ArrivedOrdersContainer;
