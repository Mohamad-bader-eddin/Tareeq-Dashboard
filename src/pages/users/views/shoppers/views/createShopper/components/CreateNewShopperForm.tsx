import { Form, Formik } from "formik";
import { CreateShopperFormType } from "../types/CreateShopperFormType";
import UploadImage from "../../../../../../../share/components/uploadImage/UploadImage";
import { useTranslation } from "react-i18next";
import Input from "../../../../../../../share/components/Input/Input";
import { Box, Button, Stack } from "@mui/material";
import SubmitButton from "../../../../../../../share/components/submitButton/SubmitButton";
import AutocompleteInput from "../../../../../../../share/components/autoComplete/AutocompleteInput";
import useZoneQuery from "../../../../../../../share/hooks/useZoneQuery";
import useZoneMaper from "../../../../../../../share/hooks/useZoneMaper";
import useVehiclesQuery from "../../../../../../vehicles/hooks/useVehiclesQuery";
import useVehiclesMapper from "../hooks/useVehiclesMapper";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../../../components/PasswordInput";

const CreateNewShopperForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: CreateShopperFormType) => {
  const { t } = useTranslation();
  const { data, isLoading } = useZoneQuery();
  const { options } = useZoneMaper({ data: data?.data.content });
  const { data: vehicles, isLoading: vehiclesLoading } = useVehiclesQuery();
  const { vehiclesOptions } = useVehiclesMapper({
    data: vehicles?.data.content,
  });
  const navigate = useNavigate();
  const handleVehicle = () => {
    navigate("/vehicles/add-vehicle");
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <UploadImage
            formik={formik}
            name="shopperPicture"
            title={t("upload_shopper_picture")}
          />
          <Input formik={formik} label={t("name")} name="name" />
          {/* <Input formik={formik} label={t("email")} name="email" /> */}
          <PasswordInput
            formik={formik}
            label={t("password")}
            name="password"
          />
          <Input formik={formik} label={t("phone")} name="phone" />
          <AutocompleteInput
            formik={formik}
            label={t("zone")}
            name="zone"
            options={options}
            loading={isLoading}
          />
          <UploadImage
            formik={formik}
            name="vehiclePicture"
            title={t("upload_car_picture")}
          />
          <Input formik={formik} label={t("model_number")} name="modelNumber" />
          <Input formik={formik} label={t("brand")} name="brand" />
          <Input formik={formik} label={t("plat_number")} name="platNumber" />
          <Input
            formik={formik}
            label={t("minifacture_year")}
            name="minifactureYear"
          />
          <Input formik={formik} label={t("color")} name="color" />
          <Input
            formik={formik}
            label={t("description")}
            name="description"
            textarea={true}
          />
          <Stack direction={"row"} alignItems={"center"}>
            <Box sx={{ flex: "1" }}>
              <AutocompleteInput
                formik={formik}
                label={t("vehicle_type")}
                name="vehicleType"
                options={vehiclesOptions}
                loading={vehiclesLoading}
              />
            </Box>
            <Button
              variant="text"
              sx={{ marginInlineStart: "20px", mb: "20px" }}
              onClick={handleVehicle}
            >
              {t("add_vehicle_type")}
            </Button>
          </Stack>
          {/* <UploadImage
            formik={formik}
            name="carPicture"
            title={t("upload_car_picture")}
          />
          <Input formik={formik} label={t("car_type")} name="carType" />
          <Input
            formik={formik}
            label={t("car_description")}
            name="carDescription"
            textarea={true}
          /> */}
          <Box sx={{ width: "200px" }}>
            <SubmitButton
              name={t("save")}
              disabled={!formik.isValid || formik.isSubmitting}
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CreateNewShopperForm;
