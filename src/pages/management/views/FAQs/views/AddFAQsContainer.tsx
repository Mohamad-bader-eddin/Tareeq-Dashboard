import { useTranslation } from "react-i18next";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { Typography } from "@mui/material";
import useAddFAQsFormValidation from "./hooks/useAddFAQsFormValidation";
import AddFAQsForm from "./components/AddFAQsForm";
import Breadcrumb from "../../../../../share/components/breadcrumbs/Breadcrumb";

const AddFAQsContainer = () => {
  const { t } = useTranslation();
  const { initialValues, onSubmit, validationSchema } =
    useAddFAQsFormValidation();
  const breadcrumbsTracks = [
    {
      path: "/management/faqs",
      name: t("faqs"),
    },
  ];
  return (
    <Layout>
      <Breadcrumb tracks={breadcrumbsTracks} current={t("add_faqs")} />
      <PaperContainer>
        <Typography variant="h6" sx={{ mb: "15px" }}>
          {t("add_faqs")}
        </Typography>
        <AddFAQsForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </PaperContainer>
    </Layout>
  );
};

export default AddFAQsContainer;
