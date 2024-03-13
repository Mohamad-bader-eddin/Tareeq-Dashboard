import { Button } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Table from "../../../../../share/components/table/Table";
import useNotificationColumns from "../hooks/useNotificationColumns";
import { useState } from "react";
import { GridRowId } from "@mui/x-data-grid";
import useNotificationRows from "../hooks/useNotificationRows";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
// import NotificationAddIcon from "@mui/icons-material/NotificationAdd";

const NotificationsContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleAddNotification = () => {
    navigate("/admin/marketing/add-notification");
  };
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const handleInfo = (id: GridRowId) => {
    navigate(`/admin/marketing/notifications/${id}`);
  };
  const { columns } = useNotificationColumns({ handleInfo, handleOpenDialog });
  const { initialRows } = useNotificationRows();
  const handleAgree = () => {};
  return (
    <Layout>
      <PaperContainer>
        <Button
          variant="outlined"
          size="small"
          // endIcon={<NotificationAddIcon />}
          onClick={handleAddNotification}
          sx={{
            ".css-9tj150-MuiButton-endIcon": {
              marginInline: "8px -4px !important",
            },
            mb: "20px",
          }}
        >
          {t("add_notification")}
        </Button>
        <Table
          columns={columns}
          rows={initialRows}
          title={t("notifications")}
          totalCount={10}
          loading={false}
        />
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          elementContent={t("delete_message")}
          deleteType={true}
          handleAgree={handleAgree}
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

export default NotificationsContainer;
