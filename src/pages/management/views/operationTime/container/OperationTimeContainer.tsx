import { Backdrop, Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import useOperationTimeFormValidation from "../hooks/useOperationTimeFormValidation";
import OperationTimeForm from "../components/OperationTimeForm";
import useManagementQuery from "../../../hooks/useManagementQuery";
import Spinner from "../../../../../share/components/Spinner";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";

const OperationTimeContainer = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useManagementQuery();
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
  } = useOperationTimeFormValidation({ data: data?.data.content });

  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h6" sx={{ marginBottom: "15px" }}>
          {t("operation_time")}
        </Typography>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <Spinner />
          </Backdrop>
        ) : (
          <OperationTimeForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          />
        )}
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

export default OperationTimeContainer;
