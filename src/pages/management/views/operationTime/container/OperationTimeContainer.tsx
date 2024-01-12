import { Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import useOperationTimeFormValidation from "../hooks/useOperationTimeFormValidation";
import OperationTimeForm from "../components/OperationTimeForm";

const OperationTimeContainer = () => {
  const { t } = useTranslation();
  const { initialValues, onSubmit, validationSchema } =
    useOperationTimeFormValidation();
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h5" sx={{ marginBottom: "15px" }}>
          {t("operation_time")}
        </Typography>
        <OperationTimeForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </PaperContainer>
    </Layout>
  );
};

export default OperationTimeContainer;
