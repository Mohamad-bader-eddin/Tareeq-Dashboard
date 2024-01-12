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

const AppVarialbesPeriods = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleAddAppVarialbesPeriod = () => {
    navigate("/management/add-app-varialbes-periods");
  };
  const { columns } = useAppVarialbesPeriodsColumns({
    handleAddAppVarialbesPeriod,
    setOpenDeleteDialog,
  });
  const { initialRows } = useAppVarialbesPeriodsRows();
  return (
    <Layout>
      <PaperContainer>
        <Button
          variant="outlined"
          endIcon={<AddTwoToneIcon />}
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
          rows={initialRows}
          title={t("app_variables_periods")}
          totalCount={40}
        />
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          elementContent={t("delete_message")}
        />
      </PaperContainer>
    </Layout>
  );
};

export default AppVarialbesPeriods;
