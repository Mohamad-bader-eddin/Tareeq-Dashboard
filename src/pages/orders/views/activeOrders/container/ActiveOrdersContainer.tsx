import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import OrdersHead from "../../../components/OrdersHead";
import useActiveOrdersContainerColumn from "../hooks/useActiveOrdersContainerColumn";
import useActiveOrdersContainerRows from "../hooks/useActiveOrdersContainerRows";
import useAvtiveOrdersQuery from "../hooks/useAvtiveOrdersQuery";

const ActiveOrdersContainer = () => {
  const { t } = useTranslation();
  const { data, isLoading, isFetching } = useAvtiveOrdersQuery();
  const { columns } = useActiveOrdersContainerColumn();
  const { rows } = useActiveOrdersContainerRows({ data: data?.data.content });

  return (
    <Layout>
      <PaperContainer>
        <OrdersHead />
        <Table
          columns={columns}
          rows={rows}
          title={t("active_orders")}
          totalCount={data?.data.content.length}
          loading={isLoading || isFetching}
        />
      </PaperContainer>
    </Layout>
  );
};

export default ActiveOrdersContainer;
