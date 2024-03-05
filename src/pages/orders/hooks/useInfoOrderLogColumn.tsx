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
      flex: 1,
    },
    {
      field: "log",
      headerName: t("log"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "created_at",
      headerName: t("created_at"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];
  return { columns };
};
export default useInfoOrderLogColumn;
