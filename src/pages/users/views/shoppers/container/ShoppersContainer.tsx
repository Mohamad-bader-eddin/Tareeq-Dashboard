import { Button } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Table from "../../../../../share/components/table/Table";
import useShoppersColumns from "../hooks/useShoppersColumns";
import useShoppersRows from "../hooks/useShoppersRows";
import { useState } from "react";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import useDeiversQuery from "../hooks/useDeiversQuery";
import { GridRowId } from "@mui/x-data-grid";
import useDriverDeleteQuery from "../hooks/useDriverDeleteQuery";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";

const ShoppersContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleInfo = (id: GridRowId) => {
    navigate(`/users/shoppers/${id}`);
  };
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const { columns } = useShoppersColumns({ handleOpenDialog, handleInfo });
  const handleAddShopper = () => {
    navigate("/users/shoppers/add-shopper");
  };
  const { mutate } = useDriverDeleteQuery();
  const { data, isLoading, refetch } = useDeiversQuery();
  const { rows } = useShoppersRows({ data: data?.data.content });
  const handleAgree = () => {
    mutate(selectedId as GridRowId, {
      onSuccess: (response) => {
        setOpenSucsses(true);
        setMsg(response.data.message);
        setOpenDeleteDialog(false);
        refetch();
      },
      onError: (error) => {
        const err = error as Error;
        setOpenError(true);
        setErrorMsg(err.message);
        setOpenDeleteDialog(false);
      },
    });
  };
  return (
    <Layout>
      <PaperContainer>
        <Button
          variant="outlined"
          endIcon={<PersonAddIcon />}
          onClick={handleAddShopper}
          sx={{
            ".css-9tj150-MuiButton-endIcon": {
              marginInline: "8px -4px !important",
            },
            mb: "20px",
          }}
        >
          {t("add_shopper")}
        </Button>
        <Table
          columns={columns}
          rows={rows}
          title={t("drivers")}
          totalCount={data?.data.content.length}
          loading={isLoading}
        />
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          deleteType={true}
          elementContent={t("delete_message")}
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

export default ShoppersContainer;
