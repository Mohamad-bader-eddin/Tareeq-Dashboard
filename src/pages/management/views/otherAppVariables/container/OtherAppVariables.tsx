import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { Typography } from "@mui/material";
import useOtherAppVariablesFormValidation from "../hooks/useOtherAppVariablesFormValidation";
import OtherAppVariablesForm from "../components/OtherAppVariablesForm";

const OtherAppVariables = () => {
  const { t } = useTranslation();
  const { initialValues, onSubmit, validationSchema } =
    useOtherAppVariablesFormValidation();
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h5" sx={{ mb: "20px" }}>
          {t("app_variables")}
        </Typography>
        <Typography variant="h5" sx={{ mb: "20px", color: "#43abc9" }}>
          {t("other_Management_variables")}
        </Typography>
        <OtherAppVariablesForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </PaperContainer>
    </Layout>
  );
};

export default OtherAppVariables;
