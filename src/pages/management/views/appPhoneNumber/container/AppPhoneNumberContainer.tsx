import { Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import useAppPhoneNumberFormValidation from "../hooks/useAppPhoneNumberFormValidation";
import AppPhoneNumberForm from "../components/AppPhoneNumberForm";

const AppPhoneNumberContainer = () => {
  const { t } = useTranslation();
  const { initialValues, onSubmit, validationSchema } =
    useAppPhoneNumberFormValidation();
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "15px" }}>
          {t("app_phone_number")}
        </Typography>
        <AppPhoneNumberForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </PaperContainer>
    </Layout>
  );
};

export default AppPhoneNumberContainer;
