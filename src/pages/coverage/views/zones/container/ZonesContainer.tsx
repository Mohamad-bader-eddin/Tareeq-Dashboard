import { Button } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useZoneColumn from "../hooks/useZoneColumn";
import useZoneRows from "../hooks/useZoneRows";
import Table from "../../../../../share/components/table/Table";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import useZoneQuery from "../hooks/useZoneQuery";
import useDeleteZoneQuery from "../hooks/useDeleteZoneQuery";
import { GridRowId } from "@mui/x-data-grid";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";

const ZonesContainer = () => {
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
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data, isLoading, refetch } = useZoneQuery();
  const { mutate, isLoading: deleteLoading } = useDeleteZoneQuery();
  const handleAddZone = () => {
    navigate("/admin/coverage/add-zones");
  };
  const handleInfoZone = (id: GridRowId) => {
    navigate(`/admin/coverage/zones/${id}`);
  };
  const { columns } = useZoneColumn({ handleInfoZone, handleOpenDialog });
  const { rows } = useZoneRows({ data: data?.data.content });
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
        <Button
          variant="outlined"
          endIcon={<AddLocationAltIcon />}
          onClick={handleAddZone}
          size="small"
          sx={{
            ".css-9tj150-MuiButton-endIcon": {
              marginInline: "8px -4px !important",
            },
            mb: "20px",
          }}
        >
          {t("add_zone")}
        </Button>
        <Table
          columns={columns}
          rows={rows}
          title={t("zones")}
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

export default ZonesContainer;
