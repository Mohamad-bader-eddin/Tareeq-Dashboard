import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import OrdersHead from "../../../components/OrdersHead";
import useActiveOrdersContainerColumn from "../hooks/useActiveOrdersContainerColumn";
import useActiveOrdersContainerRows from "../hooks/useActiveOrdersContainerRows";
import useAvtiveOrdersQuery from "../hooks/useAvtiveOrdersQuery";
import useManagementQuery from "../../../../management/hooks/useManagementQuery";
import { Backdrop } from "@mui/material";
import Spinner from "../../../../../share/components/Spinner";

const ActiveOrdersContainer = () => {
  const { t } = useTranslation();
  const { data, isLoading, isFetching } = useAvtiveOrdersQuery();
  const { columns } = useActiveOrdersContainerColumn();
  const { rows } = useActiveOrdersContainerRows({ data: data?.data.content });
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
          title={t("active_orders")}
          totalCount={data?.data.content.length}
          loading={isLoading || isFetching}
        />
      </PaperContainer>
    </Layout>
  );
};

export default ActiveOrdersContainer;
