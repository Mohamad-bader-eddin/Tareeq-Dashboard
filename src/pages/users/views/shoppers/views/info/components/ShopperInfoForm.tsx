import { Form, Formik } from "formik";
import { ShopperInfoFormType } from "../types/ShopperInfoFormType";
import { useTranslation } from "react-i18next";
import UploadImage from "../../../../../../../share/components/uploadImage/UploadImage";
import Input from "../../../../../../../share/components/Input/Input";
import SubmitButton from "../../../../../../../share/components/submitButton/SubmitButton";
import { Box, Button, Stack } from "@mui/material";
import DateInput from "../../../../../../../share/components/date/DateInput";
// import GenericMap from "../../../../../../../share/components/map/GenericMap";
import AutocompleteInput from "../../../../../../../share/components/autoComplete/AutocompleteInput";
import { useNavigate } from "react-router-dom";

const ShopperInfoForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  zoneOptions,
  zoneLoading,
  vehicleOptions,
  vehicleLoading,
}: ShopperInfoFormType) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleVehicle = () => {
    navigate("/admin/vehicles/add-vehicle");
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
          <DateInput
            formik={formik}
            label={t("register_date")}
            name="registerDate"
            disabled={true}
          />
          <Input formik={formik} label={t("name")} name="name" />
          <Input formik={formik} label={t("last_name")} name="last_name" />
          <Input formik={formik} label={t("phone")} name="phone" />
          <Input
            formik={formik}
            label={t("shopper_earning")}
            name="driverProfit"
          />
          <AutocompleteInput
            formik={formik}
            label={t("zone")}
            name="zone"
            options={zoneOptions}
            loading={zoneLoading}
          />
          <UploadImage
            formik={formik}
            name="carPicture"
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
          <Stack direction={"row"} alignItems={"center"}>
            <Box sx={{ flex: "1" }}>
              <AutocompleteInput
                formik={formik}
                label={t("vehicle_type")}
                name="vehicleType"
                options={vehicleOptions}
                loading={vehicleLoading}
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
          /> */}
          {/* <FormControlLabel
            onChange={formik.handleChange}
            value={formik.values["isOnline"]}
            name="isOnline"
            control={
              <Checkbox
                sx={{
                  "label &": {
                    color: "inherit",
                  },
                }}
              />
            }
            label={t("is_online")}
            labelPlacement="end"
          /> */}
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
          {/* <GenericMap /> */}
          <Box sx={{ width: "200px" }}>
            <SubmitButton
              name={t("edit")}
              disabled={!formik.isValid || formik.isSubmitting}
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ShopperInfoForm;
