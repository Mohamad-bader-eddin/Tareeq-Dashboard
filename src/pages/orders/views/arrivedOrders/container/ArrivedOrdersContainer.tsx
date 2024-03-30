import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import useArrivedOrdersColumns from "../hooks/useArrivedOrdersColumns";
import useArrivedOrdersRows from "../hooks/useArrivedOrdersRows";
import useArrivedOrdersQuery from "../hooks/useArrivedOrdersQuery";
import { Box, Stack } from "@mui/material";
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";
import useExportArrivedOrdersQuery from "../hooks/useExportArrivedOrdersQuery";
import { useState } from "react";
import { format } from "date-fns";
import ServerTable from "../../../../../share/components/table/ServerTable";
import AdvanceSearchDialog from "../../../components/AdvanceSearchDialog";
import { OrderFilterType } from "../../../types/OrderQueryType";

const ArrivedOrdersContainer = () => {
  const { t } = useTranslation();
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
  const { data, isLoading, refetch } = useArrivedOrdersQuery({
    page: paginationModel.page,
    limit: paginationModel.pageSize,
    orderNumber: queryParams.orderNumber,
    fromDate: queryParams.fromDate,
    toDate: queryParams.toDate,
    phone: queryParams.phone,
    name: queryParams.name,
  });
  const { columns } = useArrivedOrdersColumns();
  const { rows } = useArrivedOrdersRows({ data: data?.data.content });
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
