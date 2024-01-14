import { Button } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFAQsColumns from "../hooks/useFAQsColumns";
import useFAQsRows from "../hooks/useFAQsRows";
import Table from "../../../../../share/components/table/Table";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";

const FAQsContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleAddFAQs = () => {
    navigate("/management/add-faqs");
  };
  const { columns } = useFAQsColumns({ handleAddFAQs, setOpenDeleteDialog });
  const { initialRows } = useFAQsRows();
  return (
    <Layout>
      <PaperContainer>
        <Button
          variant="outlined"
          endIcon={<AddTwoToneIcon />}
          onClick={handleAddFAQs}
          sx={{
            ".css-9tj150-MuiButton-endIcon": {
              marginInline: "8px -4px !important",
            },
            mb: "20px",
          }}
        >
          {t("add_faqs")}
        </Button>
        <Table
          columns={columns}
          rows={initialRows}
          title={t("faqs")}
          totalCount={20}
          loading={false}
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

export default FAQsContainer;
