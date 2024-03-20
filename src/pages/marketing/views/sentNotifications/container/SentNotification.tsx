import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import { useState } from "react";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import useSentNotificationColumns from "../hooks/useSentNotificationColumns";
import useSentNotificationRows from "../hooks/useSentNotificationRows";
import useSentNotificationQuery from "../hooks/useSentNotificationQuery";
import { GridRowId } from "@mui/x-data-grid";
import useDeleteSentNotificationQuery from "../hooks/useDeleteSentNotificationQuery";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";

const SentNotification = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const { data, isLoading, refetch } = useSentNotificationQuery();
  const { columns } = useSentNotificationColumns({ handleOpenDialog });
  const { rows } = useSentNotificationRows({ data: data?.data.content });
  const { mutate, isLoading: deleteLoading } = useDeleteSentNotificationQuery();
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
          title={t("sent_notifications")}
          totalCount={data?.data.content.length}
          loading={isLoading}
        />
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          elementContent={t("delete_message")}
          handleAgree={handleAgree}
          agreeLoading={deleteLoading}
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

export default SentNotification;
