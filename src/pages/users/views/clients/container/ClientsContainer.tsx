import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
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
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import useExportClientsQuery from "../hooks/useExportClientsQuery";

const ClientsContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { data, isLoading, refetch, isFetching } = useClientsQuery();
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
  const { refetch: downloadClients } = useExportClientsQuery();
  const handleExportClick = () => {
    downloadClients();
  };

  return (
    <Layout>
      <PaperContainer>
        <ExportButton handleClick={handleExportClick} />
        <Table
          columns={columns}
          rows={rows}
          loading={isLoading || isFetching}
          title={t("clients")}
          totalCount={data?.data.content.length}
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
