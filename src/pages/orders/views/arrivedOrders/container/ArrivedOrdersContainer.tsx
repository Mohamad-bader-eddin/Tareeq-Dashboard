import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import OrdersHead from "../../../components/OrdersHead";
import useArrivedOrdersColumns from "../hooks/useArrivedOrdersColumns";
import useArrivedOrdersRows from "../hooks/useArrivedOrdersRows";
import useArrivedOrdersQuery from "../hooks/useArrivedOrdersQuery";
import useManagementQuery from "../../../../management/hooks/useManagementQuery";
import { Backdrop } from "@mui/material";
import Spinner from "../../../../../share/components/Spinner";

const ArrivedOrdersContainer = () => {
  const { data, isLoading, isFetching } = useArrivedOrdersQuery();
  const { columns } = useArrivedOrdersColumns();
  const { rows } = useArrivedOrdersRows({ data: data?.data.content });
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
          title={t("arrived_orders")}
          totalCount={data?.data.content.length}
          loading={isLoading || isFetching}
        />
      </PaperContainer>
    </Layout>
  );
};

export default ArrivedOrdersContainer;
