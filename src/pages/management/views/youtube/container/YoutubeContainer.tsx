import { Backdrop, Typography } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import useManagementQuery from "../../../hooks/useManagementQuery";
import Spinner from "../../../../../share/components/Spinner";
import useYoutubeFormValidation from "../hooks/useYoutubeFormValidation";
import YoutubeForm from "../components/YoutubeForm";

const YoutubeContainer = () => {
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
  } = useYoutubeFormValidation({ data: data?.data.content });
  return (
    <Layout>
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "15px" }}>
          Youtube
        </Typography>
        {isLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <Spinner />
          </Backdrop>
        ) : (
          <YoutubeForm
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

export default YoutubeContainer;
