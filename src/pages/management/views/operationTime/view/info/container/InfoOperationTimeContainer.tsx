import { useTranslation } from "react-i18next";
import useInfoOperationTimeFormValidation from "../hooks/useInfoOperationTimeFormValidation";
import Layout from "../../../../../../../share/components/layout/Layout";
import PaperContainer from "../../../../../../../share/components/Paper/PaperContainer";
import { Backdrop, Typography } from "@mui/material";
import Spinner from "../../../../../../../share/components/Spinner";
import OperationTimeForm from "../../add/components/OperationTimeForm";
import GenericAlert from "../../../../../../../share/components/alert/GenericAlert";
import Breadcrumb from "../../../../../../../share/components/breadcrumbs/Breadcrumb";
import { useParams } from "react-router-dom";
import useOperationTime from "../hooks/useOperationTime";

const InfoOperationTimeContainer = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useOperationTime(id as string);
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
  } = useInfoOperationTimeFormValidation({ data: data?.data.content });
  const breadcrumbsTracks = [
    {
      path: "/admin/management/operation-time",
      name: t("operation_time"),
    },
  ];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("info")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ marginBottom: "15px" }}>
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

export default InfoOperationTimeContainer;
