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
import useBlackListQuery from "../hooks/useBlackListQuery";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";

const BlackListContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { t } = useTranslation();
  const { data, isLoading } = useBlackListQuery();
  const {
    initialValues,
    onSubmit,
    validationSchema,
    msg,
    openSucsses,
    setOpenSucsses,
    openError,
    errorMsg,
    setOpenError,
  } = useAddtoBlackListValidation();
  const { columns } = useBlackListColumns({ setOpenDeleteDialog });
  const { rows } = useBlackListRows({ data: data?.data.content });
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
          rows={rows}
          title={t("black_list")}
          totalCount={data?.data.content.length}
          loading={isLoading}
        />
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          elementContent={t("delete_message")}
          handleAgree={() => {}}
        />
        <GenericAlert
          open={openSucsses}
          setOpen={setOpenSucsses}
          type="success"
          msg={msg}
        />
        <GenericAlert
          open={openError}
          setOpen={setOpenError}
          type="error"
          msg={errorMsg}
        />
      </PaperContainer>
    </Layout>
  );
};

export default BlackListContainer;
