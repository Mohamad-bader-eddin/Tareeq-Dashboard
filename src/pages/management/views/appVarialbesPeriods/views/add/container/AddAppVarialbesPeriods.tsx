import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../../../share/components/layout/Layout";
import Breadcrumb from "../../../../../../../share/components/breadcrumbs/Breadcrumb";
import { Typography } from "@mui/material";
import useAddAppVarialbesPeriodsFormValidation from "../hooks/useAddAppVarialbesPeriodsFormValidation";
import AddAppVarialbesPeriodsForm from "../components/AddAppVarialbesPeriodsForm";
import GenericAlert from "../../../../../../../share/components/alert/GenericAlert";

const AddAppVarialbesPeriods = () => {
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
  } = useAddAppVarialbesPeriodsFormValidation();
  const breadcrumbsTracks = [
    {
      path: "/dashboard/management/app-varialbes-periods",
      name: t("app_variables_periods"),
    },
  ];
  return (
    <Layout>
      <Breadcrumb
        tracks={breadcrumbsTracks}
        current={t("add_app_variables_periods")}
      />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("add_app_variables_periods")}
        </Typography>
        <AddAppVarialbesPeriodsForm
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

export default AddAppVarialbesPeriods;
