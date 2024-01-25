import PaperContainer from "../../../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import useShopperInfoFormValidation from "../hooks/useShopperInfoFormValidation";
import Breadcrumb from "../../../../../../../share/components/breadcrumbs/Breadcrumb";
import { Backdrop, Typography } from "@mui/material";
import ShopperInfoForm from "../components/ShopperInfoForm";
// import ChangePasswordForm from "../../../../../components/ChangePasswordForm";
// import useChangePasswordValidation from "../../../../../hooks/useChangePasswordValidation";
import useAddFundsFormValidation from "../../../../../hooks/useAddFundsFormValidation";
import AddFundsForm from "../../../../../components/AddFundsForm";
import useShopperWaletColumn from "../hooks/useShopperWaletColumn";
import useShopperWaletRows from "../hooks/useShopperWaletRows";
import Table from "../../../../../../../share/components/table/Table";
import { useParams } from "react-router-dom";
import useInfoDriverQuery from "../hooks/useInfoDriverQuery";
import Spinner from "../../../../../../../share/components/Spinner";
import useZoneQuery from "../../../../../../../share/hooks/useZoneQuery";
import useZoneMaper from "../../../../../../../share/hooks/useZoneMaper";
import useVehiclesQuery from "../../../../../../vehicles/hooks/useVehiclesQuery";
import useVehiclesMapper from "../../createShopper/hooks/useVehiclesMapper";
import GenericAlert from "../../../../../../../share/components/alert/GenericAlert";

const InfoContainer = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useInfoDriverQuery(id as string);
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
  const { columns } = useShopperWaletColumn();
  const { rows } = useShopperWaletRows({ data: data?.data.content });
  const { data: zoneData, isLoading: zoneLoading } = useZoneQuery();
  const { options } = useZoneMaper({ data: zoneData?.data.content });
  const { data: vehicles, isLoading: vehiclesLoading } = useVehiclesQuery();
  const { vehiclesOptions } = useVehiclesMapper({
    data: vehicles?.data.content,
  });
  const { initialValues, onSubmit, validationSchema } =
    useShopperInfoFormValidation({
      data: data?.data.content,
    });
  const breadcrumbsTracks = [
    { path: "/dashboard/users/shoppers", name: t("drivers") },
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
        <PaperContainer>
          <Typography variant="h6" sx={{ mb: "20px" }}>
            {t("info")}
          </Typography>
          <ShopperInfoForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            zoneOptions={options}
            zoneLoading={zoneLoading}
            vehicleOptions={vehiclesOptions}
            vehicleLoading={vehiclesLoading}
          />
        </PaperContainer>
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
          title={t("shopper_wallet")}
          loading={isLoading}
        />
      </PaperContainer>
    </Layout>
  );
};

export default InfoContainer;
