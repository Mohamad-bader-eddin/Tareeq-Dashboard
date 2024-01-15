import { useTranslation } from "react-i18next";
import useCanceledOrdersColumns from "../hooks/useCanceledOrdersColumns";
import useCanceledOrdersRows from "../hooks/useCanceledOrdersRows";
import Layout from "../../../../../share/components/layout/Layout";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import OrdersHead from "../../../components/OrdersHead";
import Table from "../../../../../share/components/table/Table";
import useOrdersQuery from "../../../hooks/useOrdersQuery";

const CanceledOrdersContainer = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useOrdersQuery();
  const { columns } = useCanceledOrdersColumns();
  const { rows } = useCanceledOrdersRows({ data: data?.data.content });
  return (
    <Layout>
      <PaperContainer>
        <OrdersHead />
        <Table
          columns={columns}
          rows={rows}
          title={t("canceled_orders")}
          totalCount={200}
          loading={isLoading}
        />
      </PaperContainer>
    </Layout>
  );
};

export default CanceledOrdersContainer;
