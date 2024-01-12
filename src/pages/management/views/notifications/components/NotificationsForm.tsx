import { Form, Formik } from "formik";
import { NotificationsFormType } from "../types/NotificationsFormType";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { useTranslation } from "react-i18next";
import SubmitButton from "../../../../../share/components/submitButton/SubmitButton";

const NotificationsForm = ({
  initialValues,
  onSubmit,
}: NotificationsFormType) => {
  const { t } = useTranslation();
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <Box>
            <FormControlLabel
              onChange={formik.handleChange}
              value={formik.values["messsages"]}
              name="messsages"
              control={
                <Checkbox
                  sx={{
                    "label &": {
                      color: "inherit",
                    },
                  }}
                />
              }
              label={t("messsages")}
              labelPlacement="end"
            />
          </Box>
          <Box>
            <FormControlLabel
              onChange={formik.handleChange}
              value={formik.values["pendingOrders"]}
              name="pendingOrders"
              control={
                <Checkbox
                  sx={{
                    "label &": {
                      color: "inherit",
                    },
                  }}
                />
              }
              label={t("pending_orders")}
              labelPlacement="end"
            />
          </Box>
          <Box>
            <FormControlLabel
              onChange={formik.handleChange}
              value={formik.values["scheduledOrders"]}
              name="scheduledOrders"
              control={
                <Checkbox
                  sx={{
                    "label &": {
                      color: "inherit",
                    },
                  }}
                />
              }
              label={t("scheduled_orders")}
              labelPlacement="end"
            />
          </Box>
          <Box sx={{ width: "200px" }}>
            <SubmitButton name={t("save")} disabled={!formik.isValid} />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default NotificationsForm;
