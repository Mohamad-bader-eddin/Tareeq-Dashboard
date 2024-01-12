import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useState } from "react";
import usePhoneValidation from "../../../hooks/usePhoneValidation";
import useP2PValidation from "../hooks/useP2PValidation";
import PhoneForm from "../../../components/PhoneForm";
import P2pForm from "../components/P2pForm";
import { Typography } from "@mui/material";

const P2pContainer = () => {
  const [phone, setPhone] = useState("");
  const { initialValuesPhone, onSubmitPhone, validationSchemaPhone } =
    usePhoneValidation({ setPhone });
  const { initialValues, onSubmit, validationSchema } = useP2PValidation();
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h5" sx={{ mb: "15px" }}>
          P2P
        </Typography>
        {phone ? (
          <P2pForm
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

export default P2pContainer;
