import { Button } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Table from "../../../../../share/components/table/Table";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import usePolygonsColumns from "../hooks/usePolygonsColumns";
import usePolygonsRows from "../hooks/usePolygonsRows";
import { GridRowId } from "@mui/x-data-grid";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import useZoneQuery from "../../zones/hooks/useZoneQuery";
import useDeleteZoneQuery from "../../zones/hooks/useDeleteZoneQuery";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";

const PolygonsContainer = () => {
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
  const { data, isLoading, refetch } = useZoneQuery();
  const { mutate, isLoading: deleteLoading } = useDeleteZoneQuery();
  const navigate = useNavigate();
  const handleAddPolygon = () => {
    navigate("/admin/coverage/add-polygons");
  };
  const handleInfoPolygon = (id: GridRowId) => {
    navigate(`/admin/coverage/polygons/${id}`);
  };
  const { columns } = usePolygonsColumns({
    handleInfoPolygon,
    handleOpenDialog,
  });
  const { rows } = usePolygonsRows({ data: data?.data.content });
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
          endIcon={<EditLocationAltIcon />}
          onClick={handleAddPolygon}
          size="small"
          sx={{
            ".css-9tj150-MuiButton-endIcon": {
              marginInline: "8px -4px !important",
            },
            mb: "20px",
          }}
        >
          {t("import_polygon")}
        </Button>
        <Table
          columns={columns}
          rows={rows}
          title={t("polygons")}
          totalCount={data?.data.content.length}
          loading={isLoading}
        />
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          elementContent={t("delete_message")}
          deleteType={true}
          handleAgree={handleAgree}
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

export default PolygonsContainer;
