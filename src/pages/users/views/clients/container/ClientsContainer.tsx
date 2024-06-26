import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import useClientsRows from "../hooks/useClientsRows";
import useClientsColumns from "../hooks/useClientsColumns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import useClientsQuery from "../hooks/useClientsQuery";
import { GridRowId } from "@mui/x-data-grid";
import useClientDelete from "../hooks/useClientDelete";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";
import useExportClientsQuery from "../hooks/useExportClientsQuery";
import ServerTable from "../../../../../share/components/table/ServerTable";
import { format } from "date-fns";
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import { UserQueryFilterType } from "../../../types/QueryType";
import { Box, Stack } from "@mui/material";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";
import AdvanceSearchDialog from "../components/AdvanceSearchDialog";

const ClientsContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { mobileL } = useMedeaQueries();
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const [openAdvanceSearchDialog, setOpenAdvanceSearchDialog] = useState(false);
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [queryParams, setQueryParams] = useState<UserQueryFilterType>(
    {} as UserQueryFilterType
  );
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const { data, isLoading, refetch } = useClientsQuery({
    page: paginationModel.page,
    limit: paginationModel.pageSize,
    id: queryParams.id,
    phone: queryParams.phone,
    name: queryParams.name,
    last_name: queryParams.last_name,
  });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleInfo = (id: GridRowId) => {
    navigate(`/admin/users/clients/${id}`);
  };
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const { rows } = useClientsRows({ data: data?.data.content });
  const { columns } = useClientsColumns({ handleInfo, handleOpenDialog });
  const { mutate, isLoading: deleteLoading } = useClientDelete();
  const handleAgree = () => {
    mutate(selectedId as GridRowId, {
      onSuccess: (response) => {
        setOpenSucsses(true);
        setMsg(response.data.message);
        setOpenDeleteDialog(false);
        refetch();
      },
      onError: (error) => {
        setOpenError(true);
        setErrorMsg(getErrorMessage(error));
        setOpenDeleteDialog(false);
      },
    });
  };
  const { mutate: downloadClients, isLoading: exportLoading } =
    useExportClientsQuery();
  const [openDialog, setOpenDialog] = useState(false);
  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);
  const handleExportClick = () => {
    setOpenDialog((prev) => !prev);
  };
  const handleAgreeDownload = () => {
    downloadClients(
      {
        from: from ? format(from, "yyyy-MM-dd") : "",
        to: to ? format(to, "yyyy-MM-dd") : "",
      },
      {
        onSuccess: (response) => {
          const url = window.URL.createObjectURL(new Blob([response?.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `clients.xlsx`); // Set the filename
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
      id: id,
      name: name,
      phone: phone,
      last_name: lastName,
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
              handleAgree={handleAgreeDownload}
              agreeLoading={exportLoading}
            />
          </Box>
          <Box sx={{ marginInlineStart: "15px" }}>
            <AdvanceSearchDialog
              openDialog={openAdvanceSearchDialog}
              setOpenDialog={setOpenAdvanceSearchDialog}
              id={id}
              setId={setId}
              phone={phone}
              setPhone={setPhone}
              name={name}
              setName={setName}
              handleAgree={handleSearchAgree}
              handleClick={handleSearchClick}
              lastName={lastName}
              setLastName={setLastName}
            />
          </Box>
        </Stack>
        <ServerTable
          columns={columns}
          rows={rows}
          title={t("clients")}
          totalCount={data?.data.total}
          loading={isLoading}
          paginationModel={paginationModel}
          setPaginationModel={setPaginationModel}
          rowCount={data?.data.total}
        />
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          handleAgree={handleAgree}
          deleteType={true}
          elementContent={t("delete_message")}
          agreeLoading={deleteLoading}
        />
        <GenericAlert
          open={openError}
          setOpen={setOpenError}
          type="error"
          msg={errorMsg}
        />
        <GenericAlert
          open={openSucsses}
          setOpen={setOpenSucsses}
          type="success"
          msg={msg}
        />
      </PaperContainer>
    </Layout>
  );
};

export default ClientsContainer;
