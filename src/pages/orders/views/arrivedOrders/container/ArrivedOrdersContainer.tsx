import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import OrdersHead from "../../../components/OrdersHead";
import useArrivedOrdersColumns from "../hooks/useArrivedOrdersColumns";
import useArrivedOrdersRows from "../hooks/useArrivedOrdersRows";
import useArrivedOrdersQuery from "../hooks/useArrivedOrdersQuery";
import useManagementQuery from "../../../../management/hooks/useManagementQuery";
import { Backdrop, Box, Stack } from "@mui/material";
import Spinner from "../../../../../share/components/Spinner";
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";
import useExportArrivedOrdersQuery from "../hooks/useExportArrivedOrdersQuery";

const ArrivedOrdersContainer = () => {
  const { data, isLoading, isFetching } = useArrivedOrdersQuery();
  const { columns } = useArrivedOrdersColumns();
  const { rows } = useArrivedOrdersRows({ data: data?.data.content });
  const { t } = useTranslation();
  const { data: managementData, isLoading: managementLoading } =
    useManagementQuery();
  const { mobileL } = useMedeaQueries();
  const { data: download } = useExportArrivedOrdersQuery();
  const handleExportClick = () => {
    const contentType = download?.headers["content-type"];
    const url = window.URL.createObjectURL(new Blob([download?.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `arrived orders.${contentType.split("/")[1]}`
    ); // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
            <ExportButton handleClick={handleExportClick} />
          </Box>
        </Stack>
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
