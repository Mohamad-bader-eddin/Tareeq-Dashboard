import { useState } from "react";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import Table from "../../../../../share/components/table/Table";
import AddtoBlackListForm from "../components/AddtoBlackListForm";
import useAddtoBlackListValidation from "../hooks/useAddtoBlackListValidation";
import useBlackListColumns from "../hooks/useBlackListColumns";
import useBlackListRows from "../hooks/useBlackListRows";
import { useTranslation } from "react-i18next";

const BlackListContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { t } = useTranslation();
  const { initialValues, onSubmit, validationSchema } =
    useAddtoBlackListValidation();
  const { columns } = useBlackListColumns({ setOpenDeleteDialog });
  const { initialRows } = useBlackListRows();
  return (
    <Layout>
      <PaperContainer>
        <AddtoBlackListForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </PaperContainer>
      <PaperContainer>
        <Table
          columns={columns}
          rows={initialRows}
          title={t("black_list")}
          totalCount={120}
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

export default BlackListContainer;
