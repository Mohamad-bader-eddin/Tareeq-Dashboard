import { GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const useClientsWaletColumn = () => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const tableCol: GridColDef[] = [
      {
        field: "amount",
        headerName: t("amount"),
        align: "center",
        headerAlign: "center",
        width: 200,
      },
      {
        field: "status",
        headerName: t("status"),
        width: 250,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "reason",
        headerName: t("reason"),
        width: 250,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "createdAt",
        headerName: t("created_at"),
        width: 200,
        align: "center",
        headerAlign: "center",
      },
    ];
    return tableCol;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);
  return { columns };
};
export default useClientsWaletColumn;
