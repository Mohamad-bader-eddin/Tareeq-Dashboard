import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { OperationTimeFormType } from "../types/OperationTimeFormType";
import SubmitButton from "../../../../../../../share/components/submitButton/SubmitButton";
import TimeInput from "../../../../../../../share/components/time/TimeInput";

const OperationTimeForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: OperationTimeFormType) => {
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
            <TimeInput formik={formik} label={t("from_time")} name="fromTime" />
            <TimeInput formik={formik} label={t("to_time")} name="toTime" />
            {/* <SelectInput
              formik={formik}
              label={t("is_always_run")}
              name="isAlwaysRun"
              options={options}
            /> */}
            <Box sx={{ width: "200px" }}>
              <SubmitButton
                name={t("save")}
                disabled={!formik.isValid || formik.isSubmitting}
              />
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default OperationTimeForm;
