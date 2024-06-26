import { Button } from "@mui/material";
import PaperContainer from "../../../share/components/Paper/PaperContainer";
import Layout from "../../../share/components/layout/Layout";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { GridRowId } from "@mui/x-data-grid";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Table from "../../../share/components/table/Table";
import GenericDialog from "../../../share/components/Dialog/GenericDialog";
import GenericAlert from "../../../share/components/alert/GenericAlert";
import useTransactionsTypeQuery from "../hooks/useTransactionsTypeQuery";
import useTransactionTypeColumns from "../hooks/useTransactionTypeColumns";
import useTransactionTypeRows from "../hooks/useTransactionTypeRows";
import useTransactionsTypeDeleteQuery from "../hooks/useTransactionsTypeDeleteQuery";
import { getErrorMessage } from "../../../share/utils/getErrorMessage";

const TransactionTypeContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { data, isLoading, refetch } = useTransactionsTypeQuery();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleInfo = (id: GridRowId) => {
    navigate(`/admin/transaction-type/${id}`);
  };
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const { columns } = useTransactionTypeColumns({
    handleInfo,
    handleOpenDialog,
  });
  const { rows } = useTransactionTypeRows({ data: data?.data.content });
  const { mutate, isLoading: deleteLoading } = useTransactionsTypeDeleteQuery();
  const handleAddTransactionType = () => {
    navigate("/admin/transaction-type/add");
  };
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
          size="small"
          endIcon={<PostAddIcon />}
          onClick={handleAddTransactionType}
          sx={{
            ".css-9tj150-MuiButton-endIcon": {
              marginInline: "8px -4px !important",
            },
            mb: "20px",
          }}
        >
          {t("add_transaction_type")}
        </Button>
        <Table
          columns={columns}
          rows={rows}
          loading={isLoading}
          title={t("transaction_type")}
          totalCount={data?.data.content.length}
        />
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          handleAgree={handleAgree}
          deleteType={true}
          elementContent={t("delete_message")}
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

export default TransactionTypeContainer;
