import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
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
import { useState } from "react";
import { format } from "date-fns";
import ServerTable from "../../../../../share/components/table/ServerTable";

const ArrivedOrdersContainer = () => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const { data, isLoading } = useArrivedOrdersQuery(
    paginationModel.page,
    paginationModel.pageSize
  );
  const { columns } = useArrivedOrdersColumns();
  const { rows } = useArrivedOrdersRows({ data: data?.data.content });
  const { t } = useTranslation();
  const { data: managementData, isLoading: managementLoading } =
    useManagementQuery();
  const { mobileL } = useMedeaQueries();
  const { mutate, isLoading: exportLoading } = useExportArrivedOrdersQuery();
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
          link.setAttribute("download", `arrived orders.xlsx`); // Set the filename
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
        <ServerTable
          columns={columns}
          rows={rows}
          title={t("arrived_orders")}
          totalCount={data?.data.total}
          loading={isLoading}
          paginationModel={paginationModel}
          setPaginationModel={setPaginationModel}
          rowCount={data?.data.total}
        />
      </PaperContainer>
    </Layout>
  );
};

export default ArrivedOrdersContainer;
