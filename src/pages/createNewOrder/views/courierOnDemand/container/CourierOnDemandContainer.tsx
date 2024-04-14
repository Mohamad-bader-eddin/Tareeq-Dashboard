import { useEffect, useRef, useState } from "react";
import Layout from "../../../../../share/components/layout/Layout";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import PhoneForm from "../../../components/PhoneForm";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import usePhoneValidation from "../../../hooks/usePhoneValidation";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import { Client } from "../../../../users/views/clients/types/clients";
import { useDarkMode } from "../../../../../context/DarkMode";
import jsCookie from "js-cookie";

const CourierOnDemandContainer = () => {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode();
  const [phone, setPhone] = useState<Client | null>(null);
  const {
    initialValuesPhone,
    onSubmitPhone,
    validationSchemaPhone,
    errorMsg,
    openError,
    setOpenError,
  } = usePhoneValidation({ setPhone });
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const token = jsCookie.get("accessToken");
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage({ darkMode }, "*");
    }
  }, [darkMode]);

  return (
    <Layout>
      <PaperContainer>
        <Typography variant="body1" sx={{ mb: "15px" }}>
          {t("create_new_order")}
        </Typography>
        {phone ? (
          <>
            <Typography variant="body1" sx={{ mb: "5px" }}>
              {t("client")} : {phone.name} {phone?.last_name}
            </Typography>
            <Box sx={{ height: "1329.6px", width: "100%" }}>
              <iframe
                ref={iframeRef}
                src={`https://tareeq-map.netlify.app/#/admin/create-order?id=${phone.id}&token=${token}`}
                title="Iframe Title"
                width={"100%"}
                height={"1329.6px"}
                style={{ border: "0", background: "transparent" }}
              />
            </Box>
          </>
        ) : (
          <PhoneForm
            initialValues={initialValuesPhone}
            onSubmit={onSubmitPhone}
            validationSchema={validationSchemaPhone}
          />
        )}
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

export default CourierOnDemandContainer;
