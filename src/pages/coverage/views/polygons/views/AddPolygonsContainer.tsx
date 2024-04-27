import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import useAddPolygonValidation from "./hooks/useAddPolygonValidation";
import AddPolygonsForm from "./components/AddPolygonsForm";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
// import { useEffect, useRef } from "react";
// import { useDarkMode } from "../../../../../context/DarkMode";
// import jsCookie from "js-cookie";

const AddPolygonsContainer = () => {
  const { t } = useTranslation();
  // const { darkMode } = useDarkMode();
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
  } = useAddPolygonValidation();
  const breadcrumbsTracks = [
    { path: "/admin/coverage/polygons", name: t("polygons") },
  ];
  // const iframeRef = useRef<HTMLIFrameElement>(null);
  // const token = jsCookie.get("accessToken");
  // useEffect(() => {
  //   if (iframeRef.current) {
  //     iframeRef.current.contentWindow?.postMessage({ darkMode }, "*");
  //   }
  // }, [darkMode, token]);

  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("import_polygon")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "20px" }}>
          {t("import_polygon")}
        </Typography>
        {/* <Box height={"600px"}>
          <iframe
            ref={iframeRef}
            src={`https://tareeq-map.netlify.app/#/admin/coverage/add-polygons-map?token=${token}`}
            title="Iframe Title"
            width={"100%"}
            height={"597.6px"}
            style={{ border: "0", background: "transparent" }}
          />
        </Box> */}
        <AddPolygonsForm
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

export default AddPolygonsContainer;
