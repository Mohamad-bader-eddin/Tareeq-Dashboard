import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import OrdersHead from "../../../components/OrdersHead";
import useActiveOrdersContainerColumn from "../hooks/useActiveOrdersContainerColumn";
import useActiveOrdersContainerRows from "../hooks/useActiveOrdersContainerRows";
import useAvtiveOrdersQuery from "../hooks/useAvtiveOrdersQuery";
import useManagementQuery from "../../../../management/hooks/useManagementQuery";
import { Backdrop, Box, Stack } from "@mui/material";
import Spinner from "../../../../../share/components/Spinner";
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";
import useExportActiveOrdersQuery from "../hooks/useExportActiveOrdersQuery";
import { format } from "date-fns";
import { useState } from "react";

const ActiveOrdersContainer = () => {
  const { mobileL } = useMedeaQueries();
  const { t } = useTranslation();
  const { data, isLoading, isFetching } = useAvtiveOrdersQuery();
  const { columns } = useActiveOrdersContainerColumn();
  const { rows } = useActiveOrdersContainerRows({ data: data?.data.content });
  const { data: managementData, isLoading: managementLoading } =
    useManagementQuery();
  const { mutate, isLoading: exportLoading } = useExportActiveOrdersQuery();
  const [openDialog, setOpenDialog] = useState(false);
  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);
  const handleExportClick = () => {
    setOpenDialog((prev) => !prev);
  };
  const handleAgree = () => {
    mutate(
      {
        from: from ? format(from, "yyyy-MM-dd") : "",
        to: to ? format(to, "yyyy-MM-dd") : "",
      },
      {
        onSuccess: (response) => {
          const url = window.URL.createObjectURL(new Blob([response?.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `atcive orders.xlsx`); // Set the filename
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setFrom(null);
          setTo(null);
          setOpenDialog(false);
        },
      }
    );
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
            <ExportButton
              handleClick={handleExportClick}
              openDialog={openDialog}
              setOpenDialog={setOpenDialog}
              from={from}
              setFrom={setFrom}
              to={to}
              setTo={setTo}
              handleAgree={handleAgree}
              agreeLoading={exportLoading}
            />
          </Box>
        </Stack>
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
