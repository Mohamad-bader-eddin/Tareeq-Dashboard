import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";

const useInfoOrderLogColumn = () => {
  const { t } = useTranslation();
  const columns: GridColDef[] = [
    {
      field: "user",
      headerName: t("user"),
      align: "center",
      headerAlign: "center",
      width: 250,
    },
    {
      field: "log",
      headerName: t("log"),
      width: 250,
      type: "singleSelect",
      valueOptions: ["Pending", "En Route", "Canceled", "Scheduled"],
      align: "center",
      headerAlign: "center",
    },
    {
      field: "created_at",
      headerName: t("created_at"),
      width: 250,
      align: "center",
      headerAlign: "center",
    },
  ];
  return { columns };
};
export default useInfoOrderLogColumn;
