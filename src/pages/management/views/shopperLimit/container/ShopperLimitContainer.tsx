import { Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import ShopperLimitForm from "../components/ShopperLimitForm";
import useShopperLimitFormValidation from "../hooks/useShopperLimitFormValidation";

const ShopperLimitContainer = () => {
  const { t } = useTranslation();
  const { initialValues, onSubmit, validationSchema } =
    useShopperLimitFormValidation();
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h5" sx={{ mb: "15px" }}>
          {t("shopper_limit")}
        </Typography>
        <ShopperLimitForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </PaperContainer>
    </Layout>
  );
};

export default ShopperLimitContainer;
