import { Form, Formik } from "formik";
import { OtherAppVariablesFormType } from "../types/OtherAppVariablesFormType";
import Input from "../../../../../share/components/Input/Input";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";

const OtherAppVariablesForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: OtherAppVariablesFormType) => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <Input
              formik={formik}
              label={t("offers_time_out_seconds")}
              name="offersTimeOutSeconds"
            />
            <Input
              formik={formik}
              label={t("android_app_version")}
              name="androidAppVersion"
            />
            <Input
              formik={formik}
              label={t("iPhone_app_version")}
              name="iPhoneAppVersion"
            />
            <Input formik={formik} label={t("the_radius")} name="theRadius" />
            <Box sx={{ width: "200px" }}>
              <SubmitButton name={t("save")} disabled={!formik.isValid} />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default OtherAppVariablesForm;
