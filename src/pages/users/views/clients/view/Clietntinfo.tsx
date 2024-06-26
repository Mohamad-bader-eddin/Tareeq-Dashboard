import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import ClientInfoInputs from "./components/ClientInfoInputs";
import { useTranslation } from "react-i18next";
import useClientsInfoValidation from "./hooks/useClientsInfoValidation";
import Addresses from "./components/Addresses";
import { Backdrop, Typography } from "@mui/material";
// import ChangePasswordForm from "../../../components/ChangePasswordForm";
// import useChangePasswordValidation from "../../../hooks/useChangePasswordValidation";
import AddFundsForm from "../../../components/AddFundsForm";
import Table from "../../../../../share/components/table/Table";
import useClientsWaletColumn from "./hooks/useClientsWaletColumn";
import useClientsWaletRows from "./hooks/useClientsWaletRows";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import useClientInfoQuery from "./hooks/useClientInfoQuery";
import { useParams } from "react-router-dom";
import Spinner from "../../../../../share/components/Spinner";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import useAddFundsFormValidation from "./hooks/useAddFundsFormValidation";
import GenericEmbededMap from "../../../../../share/components/map/GenericEmbededMap";
import { convertPriceToSY } from "../../../../../share/utils/convertPriceToSY";

const Clietntinfo = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useClientInfoQuery(id as string);
  const {
    initialValues,
    onSubmit,
    validationSchema,
    msg: msgInfo,
    openSucsses: openSucssesInfo,
    setOpenSucsses: setOpenSucssesInfo,
    openError: openErrorInfo,
    errorMsg: errorMsgInfo,
    setOpenError: setOpenErrorInfo,
  } = useClientsInfoValidation({ data: data?.data.content });
  // const {
  //   initialValues: changePasswordValues,
  //   onSubmit: changePasswordOnSubmit,
  //   validationSchema: changePassworValidationSchema,
  // } = useChangePasswordValidation();
  const {
    initialValues: addFundsValues,
    onSubmit: addFundsOnSubmit,
    validationSchema: addFundsvalidationSchema,
    msg,
    openSucsses,
    setOpenSucsses,
    openError,
    errorMsg,
    setOpenError,
  } = useAddFundsFormValidation(id as string);
  const { columns } = useClientsWaletColumn();
  const { rows } = useClientsWaletRows({ data: data?.data?.content });
  const breadcrumbsTracks = [
    { path: "/admin/users/clients", name: t("clients") },
  ];

  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("info")} />
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <Spinner />
        </Backdrop>
      ) : (
        <>
          <PaperContainer>
            <ClientInfoInputs
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            />
            <GenericAlert
              open={openSucssesInfo}
              setOpen={setOpenSucssesInfo}
              type="success"
              msg={msgInfo}
            />
            <GenericAlert
              open={openErrorInfo}
              setOpen={setOpenErrorInfo}
              type="error"
              msg={errorMsgInfo}
            />
          </PaperContainer>
          <PaperContainer>
            <Addresses
              data={data?.data.content.addresses}
              isLoading={isLoading}
            />
          </PaperContainer>
          <PaperContainer>
            <GenericEmbededMap
              lat={data?.data?.content?.latest_address?.lat || 33.513674}
              long={data?.data?.content?.latest_address?.long || 36.276526}
            />
          </PaperContainer>
        </>
      )}
      {/* <PaperContainer>
        <Typography variant="h6" sx={{ marginBottom: "15px" }}>
          {t("change_password")}
        </Typography>
        <ChangePasswordForm
          initialValues={changePasswordValues}
          onSubmit={changePasswordOnSubmit}
          validationSchema={changePassworValidationSchema}
        />
      </PaperContainer> */}
      <PaperContainer>
        <Typography variant="h6" sx={{ marginBottom: "15px" }}>
          {t("add_funds_to_the_wallet")}
        </Typography>
        <AddFundsForm
          initialValues={addFundsValues}
          onSubmit={addFundsOnSubmit}
          validationSchema={addFundsvalidationSchema}
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
      <PaperContainer>
        <Table
          columns={columns}
          rows={rows}
          loading={isLoading}
          title={
            t("client_wallet") +
            ` (${t("total")}: ${convertPriceToSY(
              data?.data.content.total_earn
            )})`
          }
        />
      </PaperContainer>
    </Layout>
  );
};

export default Clietntinfo;
