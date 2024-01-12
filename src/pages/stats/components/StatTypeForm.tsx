import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { StatTypeFormType } from "../types/StatTypeFormType";
import SubmitButton from "../../../share/components/submitButton/SubmitButton";
import { Box } from "@mui/material";
import SelectInput from "../../../share/components/select/SelectInput";

const StatTypeForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: StatTypeFormType) => {
  const { t } = useTranslation();
  const options = [
    {
      value: "orders",
      key: t("orders"),
    },
    {
      value: "percentageOrders",
      key: t("percentage_orders"),
    },
    {
      value: "TimeToAssign",
      key: t("time_to_assign"),
    },
    {
      value: "timeToCustomer",
      key: t("time_to_customer"),
    },
    {
      value: "tripTime",
      key: t("trip_time"),
    },
    {
      value: "fullServiceTime",
      key: t("full_service_time"),
    },
    {
      value: "averageAcceptanceRatio",
      key: t("average_acceptance_ratio"),
    },
    {
      value: "averageRatings",
      key: t("average_ratings"),
    },
  ];
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <SelectInput
            formik={formik}
            label={t("statistic_type")}
            name="statType"
            options={options}
          />
          <Box sx={{ width: "200px" }}>
            <SubmitButton name={t("show")} disabled={!formik.isValid} />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default StatTypeForm;
