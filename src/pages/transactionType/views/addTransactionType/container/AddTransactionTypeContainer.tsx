import { useTranslation } from "react-i18next";
import useAddTransactionTypeFormValidation from "../hooks/useAddTransactionTypeFormValidation";
import Layout from "../../../../../share/components/layout/Layout";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import { Typography } from "@mui/material";
import AddTransactionTypeForm from "../components/AddTransactionTypeForm";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";

const AddTransactionTypeContainer = () => {
  const { t } = useTranslation();
  const {
    initialValues,
    onSubmit,
    validationSchema,
    errorMsg,
    openError,
    setOpenError,
    msg,
    openSucsses,
    setOpenSucsses,
  } = useAddTransactionTypeFormValidation({});
  const breadcrumbsTracks = [
    { path: "/dashboard/transaction-type", name: t("transaction_type") },
  ];
  return (
    <Layout>
      <Breadcrumb
        tracks={breadcrumbsTracks}
        current={t("add_transaction_type")}
      />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("add_transaction_type")}
        </Typography>
        <AddTransactionTypeForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
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

export default AddTransactionTypeContainer;
