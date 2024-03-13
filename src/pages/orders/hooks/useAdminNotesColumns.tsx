import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";

const useAdminNotesColumns = () => {
  const { t } = useTranslation();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: t("id"),
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "user",
      headerName: t("user"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "note",
      headerName: t("note"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "createdAt",
      headerName: t("created_at"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
  ];
  return { columns };
};
export default useAdminNotesColumns;
