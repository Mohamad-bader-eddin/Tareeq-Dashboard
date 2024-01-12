import { useState } from "react";
import Layout from "../../../../../share/components/layout/Layout";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import PhoneForm from "../../../components/PhoneForm";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import usePhoneValidation from "../../../hooks/usePhoneValidation";
import useCourierOnDemandValidation from "../hooks/useCourierOnDemandValidation";
import CourierOnDemandForm from "../components/CourierOnDemandForm";

const CourierOnDemandContainer = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const { initialValuesPhone, onSubmitPhone, validationSchemaPhone } =
    usePhoneValidation({ setPhone });
  const { initialValues, onSubmit, validationSchema } =
    useCourierOnDemandValidation();

  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h5" sx={{ mb: "15px" }}>
          {t("courier_on_demand")}
        </Typography>
        {phone ? (
          <CourierOnDemandForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          />
        ) : (
          <PhoneForm
            initialValues={initialValuesPhone}
            onSubmit={onSubmitPhone}
            validationSchema={validationSchemaPhone}
          />
        )}
      </PaperContainer>
    </Layout>
  );
};

export default CourierOnDemandContainer;
