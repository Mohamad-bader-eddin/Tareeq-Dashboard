import { useState } from "react";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useLocationVotesColumns from "../hooks/useLocationVotesColumns";
import useLocationVotesRows from "../hooks/useLocationVotesRows";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import useLocationVotesQuery from "../hooks/useLocationVotesQuery";
import { GridRowId } from "@mui/x-data-grid";
import useDeleteLocationVotesQuery from "../hooks/useDeleteLocationVotesQuery";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";

const LocationVotesContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const { t } = useTranslation();
  const { data, isLoading, refetch, isFetching } = useLocationVotesQuery();
  const navigate = useNavigate();
  const handleInfoLocationVote = (id: GridRowId) => {
    navigate(`/admin/coverage/location-vote-info/${id}`);
  };
  const { mutate } = useDeleteLocationVotesQuery();
  const { columns } = useLocationVotesColumns({
    handleInfoLocationVote,
    handleOpenDialog,
  });
  const { rows } = useLocationVotesRows({ data: data?.data.content });
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
  return (
    <Layout>
      <PaperContainer>
        <Table
          columns={columns}
          rows={rows}
          title={t("votes")}
          totalCount={data?.data.content.length}
          loading={isLoading || isFetching}
        />
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          elementContent={t("delete_message")}
          handleAgree={handleAgree}
          deleteType={true}
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

export default LocationVotesContainer;
