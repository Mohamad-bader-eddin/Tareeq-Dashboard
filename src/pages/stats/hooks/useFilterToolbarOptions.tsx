import { useTranslation } from "react-i18next";

const useFilterToolbarOptions = () => {
  const { t } = useTranslation();
  const filterOptions = [
    {
      value: "arrived",
      key: t("arrived"),
    },
    {
      value: "canceled",
      key: t("canceled"),
    },
  ];
  return { filterOptions };
};

export default useFilterToolbarOptions;
