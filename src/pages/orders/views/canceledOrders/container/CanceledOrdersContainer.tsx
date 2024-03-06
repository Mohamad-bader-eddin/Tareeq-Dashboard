import { useTranslation } from "react-i18next";
import useCanceledOrdersColumns from "../hooks/useCanceledOrdersColumns";
import useCanceledOrdersRows from "../hooks/useCanceledOrdersRows";
import Layout from "../../../../../share/components/layout/Layout";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import OrdersHead from "../../../components/OrdersHead";
import Table from "../../../../../share/components/table/Table";
import useCanceledOrdersQuery from "../hooks/useCanceledOrdersQuery";
import useManagementQuery from "../../../../management/hooks/useManagementQuery";
import { Backdrop, Box, Stack } from "@mui/material";
import Spinner from "../../../../../share/components/Spinner";
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";

const CanceledOrdersContainer = () => {
  const { mobileL } = useMedeaQueries();
  const { t } = useTranslation();
  const { data, isLoading, isFetching } = useCanceledOrdersQuery();
  const { columns } = useCanceledOrdersColumns();
  const { rows } = useCanceledOrdersRows({ data: data?.data.content });
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
        <Stack
          direction={mobileL ? "column" : "row"}
          alignItems={mobileL ? "start" : "center"}
        >
          <OrdersHead data={managementData?.data.content} />
          <Box sx={{ marginInlineStart: mobileL ? "0" : "20px" }}>
            <ExportButton handleClick={() => {}} />
          </Box>
        </Stack>
        <Table
          columns={columns}
          rows={rows}
          title={t("canceled_orders")}
          totalCount={data?.data.content.length}
          loading={isLoading || isFetching}
        />
      </PaperContainer>
    </Layout>
  );
};

export default CanceledOrdersContainer;
