import { Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import ChangePasswordForm from "../components/ChangePasswordForm";
import useChangePasswordFormValidation from "../hooks/useChangePasswordFormValidation";

const ChangePasswordContainer = () => {
  const { t } = useTranslation();
  const {
    initialValues,
    onSubmit,
    validationSchema,
    errorMsg,
    msg,
    openError,
    openSucsses,
    setOpenError,
    setOpenSucsses,
  } = useChangePasswordFormValidation();
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "15px" }}>
          {t("change_password")}
        </Typography>
        <ChangePasswordForm
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

export default ChangePasswordContainer;
