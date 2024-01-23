import { useState } from "react";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { Button } from "@mui/material";
import usePromoColumns from "../hooks/usePromoColumns";
import usePromoRows from "../hooks/usePromoRows";
import Table from "../../../../../share/components/table/Table";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import usePromosQuery from "../hooks/usePromosQuery";
import { GridRowId } from "@mui/x-data-grid";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import useDeleteQuery from "../hooks/useDeleteQuery";

const PromoContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, isLoading, refetch } = usePromosQuery();
  const { mutate } = useDeleteQuery();
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const handleAddPromoCode = () => {
    navigate("/marketing/add-promo-code");
  };
  const handleInfo = (id: GridRowId) => {
    navigate(`/marketing/promos/${id}`);
  };
  const handleUserUsedThisCoupon = () => {
    navigate("/marketing/promo-used-copoun");
  };
  const { columns } = usePromoColumns({
    handleUserUsedThisCoupon,
    handleOpenDialog,
    handleInfo,
  });
  const { rows } = usePromoRows({ data: data?.data.content });

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
          endIcon={<AddTwoToneIcon />}
          onClick={handleAddPromoCode}
          size="small"
          sx={{
            ".css-9tj150-MuiButton-endIcon": {
              marginInline: "8px -4px !important",
            },
            mb: "20px",
          }}
        >
          {t("add_promo_code")}
        </Button>
        <Table
          columns={columns}
          rows={rows}
          title={t("promo_code")}
          totalCount={data?.data.content.length}
          loading={isLoading}
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

export default PromoContainer;
