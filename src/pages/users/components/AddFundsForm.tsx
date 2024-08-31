import { Form, Formik } from "formik";
import { AddFundsFormType } from "../types/AddFundsFormType";
import Input from "../../../share/components/Input/Input";
import { useTranslation } from "react-i18next";
import SubmitButton from "../../../share/components/submitButton/SubmitButton";
import { Box } from "@mui/material";
import AutocompleteInput from "../../../share/components/autoComplete/AutocompleteInput";
import useTransactionsQuery from "./useTransactionsQuery";
import useTransactionMapper from "./useTransactionMapper";

const AddFundsForm = ({
  initialValues,
  onSubmit,
  validationSchema,
}: AddFundsFormType) => {
  const { t } = useTranslation();
  const { data, isLoading } = useTransactionsQuery();
  const { transactionOptions } = useTransactionMapper({
    data: data?.data.content,
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <AutocompleteInput
              formik={formik}
              label="Transaction Type"
              name="transactionType"
              loading={isLoading}
              options={transactionOptions}
            />
            <Input formik={formik} label={t("amount")} name="amount" />
            <Input formik={formik} label={t("order_no")} name="order_id" />

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

export default AddFundsForm;
