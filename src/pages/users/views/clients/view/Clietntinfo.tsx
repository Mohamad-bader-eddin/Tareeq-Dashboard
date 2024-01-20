import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import ClientInfoInputs from "./components/ClientInfoInputs";
import { useTranslation } from "react-i18next";
import useClientsInfoValidation from "./hooks/useClientsInfoValidation";
import Addresses from "./components/Addresses";
import { Backdrop, Typography } from "@mui/material";
import ChangePasswordForm from "../../../components/ChangePasswordForm";
import useChangePasswordValidation from "../../../hooks/useChangePasswordValidation";
import AddFundsForm from "../../../components/AddFundsForm";
import useAddFundsFormValidation from "../../../hooks/useAddFundsFormValidation";
import Table from "../../../../../share/components/table/Table";
import useClientsWaletColumn from "./hooks/useClientsWaletColumn";
import useClientsWaletRows from "./hooks/useClientsWaletRows";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";
import useClientInfoQuery from "./hooks/useClientInfoQuery";
import { useParams } from "react-router-dom";
import Spinner from "../../../../../share/components/Spinner";

const Clietntinfo = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useClientInfoQuery(id as string);
  const { initialValues, onSubmit, validationSchema } =
    useClientsInfoValidation({ data: data?.data.content });
  const {
    initialValues: changePasswordValues,
    onSubmit: changePasswordOnSubmit,
    validationSchema: changePassworValidationSchema,
  } = useChangePasswordValidation();
  const {
    initialValues: addFundsValues,
    onSubmit: addFundsOnSubmit,
    validationSchema: addFundsvalidationSchema,
  } = useAddFundsFormValidation("1");
  const { columns } = useClientsWaletColumn();
  const { initialRows } = useClientsWaletRows();
  const breadcrumbsTracks = [{ path: "/users/clients", name: t("clients") }];

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
          </PaperContainer>
          <PaperContainer>
            <Addresses
              data={data?.data.content.address}
              isLoading={isLoading}
              id={id as string}
            />
          </PaperContainer>
        </>
      )}
      <PaperContainer>
        <Typography variant="h5" sx={{ marginBottom: "15px" }}>
          {t("change_password")}
        </Typography>
        <ChangePasswordForm
          initialValues={changePasswordValues}
          onSubmit={changePasswordOnSubmit}
          validationSchema={changePassworValidationSchema}
        />
      </PaperContainer>
      <PaperContainer>
        <Typography variant="h5" sx={{ marginBottom: "15px" }}>
          {t("add_funds_to_the_wallet")}
        </Typography>
        <AddFundsForm
          initialValues={addFundsValues}
          onSubmit={addFundsOnSubmit}
          validationSchema={addFundsvalidationSchema}
        />
      </PaperContainer>
      <PaperContainer>
        <Table
          columns={columns}
          rows={initialRows}
          loading={false}
          title={t("client_wallet")}
          totalCount={50000}
        />
      </PaperContainer>
    </Layout>
  );
};

export default Clietntinfo;
