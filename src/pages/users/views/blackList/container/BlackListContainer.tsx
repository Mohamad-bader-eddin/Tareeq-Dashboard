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
import useBlackListDeleteQuery from "../hooks/useBlackListDeleteQuery";
import { GridRowId } from "@mui/x-data-grid";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";

const BlackListContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openErrorDelete, setOpenErrorDelete] = useState(false);
  const [errorMsgDelete, setErrorMsgDelete] = useState("");
  const [openSucssesDelete, setOpenSucssesDelete] = useState(false);
  const [msgDelete, setMsgDelete] = useState("");
  const { t } = useTranslation();
  const { data, isLoading, refetch } = useBlackListQuery();
  const { mutate, isLoading: deleteLoading } = useBlackListDeleteQuery();
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
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const { columns } = useBlackListColumns({ handleOpenDialog });
  const { rows } = useBlackListRows({ data: data?.data.content });
  const handleAgree = () => {
    mutate(selectedId as GridRowId, {
      onSuccess: (response) => {
        setOpenSucssesDelete(true);
        setMsgDelete(response.data.message);
        setOpenDeleteDialog(false);
        refetch();
      },
      onError: (error) => {
        setOpenErrorDelete(true);
        setErrorMsgDelete(getErrorMessage(error));
        setOpenDeleteDialog(false);
      },
    });
  };
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
          deleteType={true}
          handleAgree={handleAgree}
          agreeLoading={deleteLoading}
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
        <GenericAlert
          open={openSucssesDelete}
          setOpen={setOpenSucssesDelete}
          type="success"
          msg={msgDelete}
        />
        <GenericAlert
          open={openErrorDelete}
          setOpen={setOpenErrorDelete}
          type="error"
          msg={errorMsgDelete}
        />
      </PaperContainer>
    </Layout>
  );
};

export default BlackListContainer;
