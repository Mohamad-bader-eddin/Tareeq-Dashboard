import { useState } from "react";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useLocationVotesColumns from "../hooks/useLocationVotesColumns";
import useLocationVotesRows from "../hooks/useLocationVotesRows";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";

const LocationVotesContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleVoteInfo = (clientName: string) => {
    navigate("/coverage/location-vote-info", { state: { clientName } });
  };
  const { columns } = useLocationVotesColumns({
    handleVoteInfo,
    setOpenDeleteDialog,
  });
  const { initialRows } = useLocationVotesRows();
  return (
    <Layout>
      <PaperContainer>
        <Table
          columns={columns}
          rows={initialRows}
          title={t("votes")}
          totalCount={2000}
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

export default LocationVotesContainer;
