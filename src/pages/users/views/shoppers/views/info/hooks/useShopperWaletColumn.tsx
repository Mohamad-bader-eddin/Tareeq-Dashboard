import { GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const useShopperWaletColumn = () => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const tableCol: GridColDef[] = [
      {
        field: "transactionId",
        headerName: t("transaction_id"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "order_id",
        headerName: t("order_no"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "amount",
        headerName: t("amount"),
        align: "center",
        headerAlign: "center",
        flex: 1,
      },
      {
        field: "reason",
        headerName: t("reason"),
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
    return tableCol;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);
  return { columns };
};
export default useShopperWaletColumn;
