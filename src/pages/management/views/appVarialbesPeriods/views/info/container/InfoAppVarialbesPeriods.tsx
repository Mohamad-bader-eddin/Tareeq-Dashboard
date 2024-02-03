import { useTranslation } from "react-i18next";
import useAddAppVarialbesPeriodsFormValidation from "../hooks/useUpdateAppVarialbesPeriodsFormValidation";
import Layout from "../../../../../../../share/components/layout/Layout";
import Breadcrumb from "../../../../../../../share/components/breadcrumbs/Breadcrumb";
import PaperContainer from "../../../../../../../share/components/Paper/PaperContainer";
import { Backdrop, Typography } from "@mui/material";
import AddAppVarialbesPeriodsForm from "../../add/components/AddAppVarialbesPeriodsForm";
import GenericAlert from "../../../../../../../share/components/alert/GenericAlert";
import { useParams } from "react-router-dom";
import useAppVarialbesPeriodQuery from "../hooks/useAppVarialbesPeriodQuery";
import Spinner from "../../../../../../../share/components/Spinner";

const InfoAppVarialbesPeriods = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useAppVarialbesPeriodQuery(id as string);
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
  } = useAddAppVarialbesPeriodsFormValidation({ data: data?.data.content });
  const breadcrumbsTracks = [
    {
      path: "/admin/management/app-varialbes-periods",
      name: t("app_variables_periods"),
    },
  ];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("info")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("info")}
        </Typography>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <Spinner />
          </Backdrop>
        ) : (
          <AddAppVarialbesPeriodsForm
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

export default InfoAppVarialbesPeriods;
