import { useTranslation } from "react-i18next";
import useCanceledOrdersColumns from "../hooks/useCanceledOrdersColumns";
import useCanceledOrdersRows from "../hooks/useCanceledOrdersRows";
import Layout from "../../../../../share/components/layout/Layout";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import useCanceledOrdersQuery from "../hooks/useCanceledOrdersQuery";
import { Box, Stack } from "@mui/material";
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";
import useExportCanceledOrdersQuery from "../hooks/useExportCanceledOrdersQuery";
import { format } from "date-fns";
import { useState } from "react";
import ServerTable from "../../../../../share/components/table/ServerTable";
import AdvanceSearchDialog from "../../../components/AdvanceSearchDialog";
import { OrderFilterType } from "../../../types/OrderQueryType";

const CanceledOrdersContainer = () => {
  const { mobileL } = useMedeaQueries();
  const { t } = useTranslation();
  const { mutate, isLoading: exportLoading } = useExportCanceledOrdersQuery();
  const [openDialog, setOpenDialog] = useState(false);
  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);
  const [openAdvanceSearchDialog, setOpenAdvanceSearchDialog] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [queryParams, setQueryParams] = useState<OrderFilterType>(
    {} as OrderFilterType
  );
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const { data, isLoading, refetch } = useCanceledOrdersQuery({
    page: paginationModel.page,
    limit: paginationModel.pageSize,
    orderNumber: queryParams.orderNumber,
    fromDate: queryParams.fromDate,
    toDate: queryParams.toDate,
    phone: queryParams.phone,
    name: queryParams.name,
  });
  const { columns } = useCanceledOrdersColumns(paginationModel);
  const { rows } = useCanceledOrdersRows({ data: data?.data.content });
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
          link.setAttribute("download", `canceled orders.xlsx`); // Set the filename
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
  const handleSearchClick = () => {
    setOpenAdvanceSearchDialog((prev) => !prev);
  };
  const handleSearchAgree = () => {
    setQueryParams({
      fromDate: fromDate ? format(fromDate, "yyyy-MM-dd") : undefined,
      toDate: toDate ? format(toDate, "yyyy-MM-dd") : undefined,
      orderNumber: orderNumber,
      name: name,
      phone: phone,
    });
    refetch();
    setOpenAdvanceSearchDialog(false);
  };
  return (
    <Layout>
      <PaperContainer>
        <Stack
          direction={mobileL ? "column" : "row"}
          alignItems={mobileL ? "start" : "center"}
        >
          <Box>
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
          <Box sx={{ marginInlineStart: "15px" }}>
            <AdvanceSearchDialog
              openDialog={openAdvanceSearchDialog}
              setOpenDialog={setOpenAdvanceSearchDialog}
              orderNumber={orderNumber}
              setOrderNumber={setOrderNumber}
              from={fromDate}
              setFrom={setFromDate}
              to={toDate}
              setTo={setToDate}
              phone={phone}
              setPhone={setPhone}
              name={name}
              setName={setName}
              handleAgree={handleSearchAgree}
              handleClick={handleSearchClick}
            />
          </Box>
        </Stack>
        <ServerTable
          columns={columns}
          rows={rows}
          title={t("canceled_orders")}
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

export default CanceledOrdersContainer;
