import { Backdrop, Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import ShopperLimitForm from "../components/ShopperLimitForm";
import useShopperLimitFormValidation from "../hooks/useShopperLimitFormValidation";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import useManagementQuery from "../../../hooks/useManagementQuery";
import Spinner from "../../../../../share/components/Spinner";

const AutoAssignRadiusContainer = () => {
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
  } = useShopperLimitFormValidation({ data: data?.data.content });
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "15px" }}>
          {t("auto_assign_radius")}
        </Typography>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <Spinner />
          </Backdrop>
        ) : (
          <ShopperLimitForm
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

export default AutoAssignRadiusContainer;
