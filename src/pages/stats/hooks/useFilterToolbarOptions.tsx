import { useTranslation } from "react-i18next";

const useFilterToolbarOptions = () => {
  const { t } = useTranslation();
  const filterOptions = [
    {
      value: "aLL",
      key: t("all"),
    },
    {
      value: "pending",
      key: t("pending"),
    },
    {
      value: "assigning",
      key: t("assigning"),
    },
    {
      value: "accepted",
      key: t("accepted"),
    },
    {
      value: "en_route",
      key: t("en_route"),
    },
    {
      value: "arrived",
      key: t("arrived"),
    },
    {
      value: "scheduled",
      key: t("scheduled"),
    },
    {
      value: "canceled",
      key: t("canceled"),
    },
    {
      value: "deleted",
      key: t("deleted"),
    },
  ];
  return { filterOptions };
};

export default useFilterToolbarOptions;
