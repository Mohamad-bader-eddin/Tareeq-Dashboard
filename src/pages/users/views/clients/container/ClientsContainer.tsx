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
import ExportButton from "../components/ExportButton";
import ServerTable from "../../../../../share/components/table/ServerTable";

const ClientsContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const { data, isLoading, refetch } = useClientsQuery(
    paginationModel.page,
    paginationModel.pageSize
  );
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
  const { mutate } = useClientDelete();
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
  const { data: downloadClients } = useExportClientsQuery();
  const handleExportClick = () => {
    const url = window.URL.createObjectURL(new Blob([downloadClients?.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `clients.xlsx`); // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <PaperContainer>
        <ExportButton handleClick={handleExportClick} />
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
