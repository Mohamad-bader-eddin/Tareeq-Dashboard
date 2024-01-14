import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import useMessagesColumns from "../hooks/useMessagesColumns";
import useMessagesRows from "../hooks/useMessagesRows";
import Table from "../../../../../share/components/table/Table";

const MessagesContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleMessageInfo = () => {
    navigate("/management/messsages/view");
  };
  const { columns } = useMessagesColumns({
    handleMessageInfo,
    setOpenDeleteDialog,
  });
  const { initialRows } = useMessagesRows();
  return (
    <Layout>
      <PaperContainer>
        <Table
          columns={columns}
          rows={initialRows}
          title={t("messsages")}
          totalCount={4000}
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

export default MessagesContainer;
