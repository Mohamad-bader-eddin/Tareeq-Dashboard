import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import { useState } from "react";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import useSentNotificationColumns from "../hooks/useSentNotificationColumns";
import useSentNotificationRows from "../hooks/useSentNotificationRows";

const SentNotification = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { t } = useTranslation();
  const { columns } = useSentNotificationColumns({ setOpenDeleteDialog });
  const { initialRows } = useSentNotificationRows();
  return (
    <Layout>
      <PaperContainer>
        <Table
          columns={columns}
          rows={initialRows}
          title={t("sent_notifications")}
          totalCount={8000}
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

export default SentNotification;
