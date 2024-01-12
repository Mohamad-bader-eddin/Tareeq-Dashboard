import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";

const useInfoOrderShoppersColumn = () => {
  const { t } = useTranslation();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: t("id"),
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "shopper_id",
      headerName: t("shopper_id"),
      align: "center",
      headerAlign: "center",
      width: 250,
      editable: true,
    },
    {
      field: "name",
      headerName: t("name"),
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: t("status"),
      width: 200,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Pending", "En Route", "Canceled", "Scheduled"],
      align: "center",
      headerAlign: "center",
    },
  ];
  return { columns };
};
export default useInfoOrderShoppersColumn;
