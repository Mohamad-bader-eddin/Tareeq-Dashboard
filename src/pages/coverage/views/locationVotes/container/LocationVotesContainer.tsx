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
import { Box, Stack } from "@mui/material";
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";
import useExportLocationVotesQuery from "../hooks/useExportLocationVotesQuery";
import { format } from "date-fns";

const LocationVotesContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mobileL } = useMedeaQueries();
  const { mutate: exportMutat, isLoading: exportLoading } =
    useExportLocationVotesQuery();
  const [openDialog, setOpenDialog] = useState(false);
  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const { t } = useTranslation();
  const { data, isLoading, refetch } = useLocationVotesQuery();
  const navigate = useNavigate();
  const handleInfoLocationVote = (id: GridRowId) => {
    navigate(`/admin/coverage/location-vote-info/${id}`);
  };
  const { mutate, isLoading: deleteLoading } = useDeleteLocationVotesQuery();
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
  const handleExportClick = () => {
    setOpenDialog((prev) => !prev);
  };
  const handleExportAgree = () => {
    exportMutat(
      {
        from: from ? format(from, "yyyy-MM-dd") : "",
        to: to ? format(to, "yyyy-MM-dd") : "",
      },
      {
        onSuccess: (response) => {
          const url = window.URL.createObjectURL(new Blob([response?.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `location votes.xlsx`); // Set the filename
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
              handleAgree={handleExportAgree}
              agreeLoading={exportLoading}
            />
          </Box>
        </Stack>
        <Table
          columns={columns}
          rows={rows}
          title={t("votes")}
          totalCount={data?.data.content.length}
          loading={isLoading}
        />
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          elementContent={t("delete_message")}
          handleAgree={handleAgree}
          deleteType={true}
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

export default LocationVotesContainer;
