import { useState } from "react";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import Table from "../../../../../share/components/table/Table";
import useAppVarialbesPeriodsColumns from "../hooks/useAppVarialbesPeriodsColumns";
import useAppVarialbesPeriodsRows from "../hooks/useAppVarialbesPeriodsRows";
import { GridRowId } from "@mui/x-data-grid";
import useAppVarialbesPeriodsQuery from "../hooks/useAppVarialbesPeriodsQuery";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import useAppVarialbesPeriodsDeleteQuery from "../hooks/useAppVarialbesPeriodsDeleteQuery";

const AppVarialbesPeriods = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { data, isLoading, refetch } = useAppVarialbesPeriodsQuery();
  const { mutate } = useAppVarialbesPeriodsDeleteQuery();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleAddAppVarialbesPeriod = () => {
    navigate("/management/add-app-varialbes-periods");
  };
  const handleInfo = (id: GridRowId) => {
    navigate(`/management/app-varialbes-periods/${id}`);
  };
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const { columns } = useAppVarialbesPeriodsColumns({
    handleInfo,
    handleOpenDialog,
  });
  const { rows } = useAppVarialbesPeriodsRows({ data: data?.data.content });
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
          size="small"
          onClick={handleAddAppVarialbesPeriod}
          sx={{
            ".css-9tj150-MuiButton-endIcon": {
              marginInline: "8px -4px !important",
            },
            mb: "20px",
          }}
        >
          {t("add_app_variables_periods")}
        </Button>
        <Table
          columns={columns}
          rows={rows}
          title={t("app_variables_periods")}
          totalCount={data?.data.content.length}
          loading={isLoading}
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

export default AppVarialbesPeriods;
