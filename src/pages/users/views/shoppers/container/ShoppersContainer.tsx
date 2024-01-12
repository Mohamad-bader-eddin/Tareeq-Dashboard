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

const ShoppersContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleInfo = (id: GridRowId) => {
    navigate(`/users/shoppers/${id}`);
  };
  const { columns } = useShoppersColumns({ setOpenDeleteDialog, handleInfo });
  const handleAddShopper = () => {
    navigate("/users/shoppers/add-shopper");
  };
  const { data, isLoading } = useDeiversQuery();
  const { rows } = useShoppersRows({ data: data?.data.content });
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
          elementContent={t("delete_message")}
          handleAgree={() => {}}
        />
      </PaperContainer>
    </Layout>
  );
};

export default ShoppersContainer;
