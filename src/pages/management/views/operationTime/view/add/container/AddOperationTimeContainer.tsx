import { useTranslation } from "react-i18next";
import useOperationTimeFormValidation from "../hooks/useOperationTimeFormValidation";
import Layout from "../../../../../../../share/components/layout/Layout";
import PaperContainer from "../../../../../../../share/components/Paper/PaperContainer";
import { Typography } from "@mui/material";
import OperationTimeForm from "../components/OperationTimeForm";
import GenericAlert from "../../../../../../../share/components/alert/GenericAlert";
import Breadcrumb from "../../../../../../../share/components/breadcrumbs/Breadcrumb";

const AddOperationTimeContainer = () => {
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
  } = useOperationTimeFormValidation();
  const breadcrumbsTracks = [
    {
      path: "/admin/management/operation-time",
      name: t("operation_time"),
    },
  ];
  return (
    <Layout>
      <Breadcrumb
        tracks={breadcrumbsTracks}
        current={t("add_operation_time")}
      />
      <PaperContainer>
        <Typography variant="h6" sx={{ marginBottom: "15px" }}>
          {t("add_operation_time")}
        </Typography>
        <OperationTimeForm
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

export default AddOperationTimeContainer;
