import { Backdrop, Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import useAppPhoneNumberFormValidation from "../hooks/useAppPhoneNumberFormValidation";
import AppPhoneNumberForm from "../components/AppPhoneNumberForm";
import useManagementQuery from "../../../hooks/useManagementQuery";
import Spinner from "../../../../../share/components/Spinner";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";

const AppPhoneNumberContainer = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useManagementQuery();
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
  } = useAppPhoneNumberFormValidation({ data: data?.data.content });
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "15px" }}>
          {t("app_phone_number")}
        </Typography>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <Spinner />
          </Backdrop>
        ) : (
          <AppPhoneNumberForm
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

export default AppPhoneNumberContainer;
