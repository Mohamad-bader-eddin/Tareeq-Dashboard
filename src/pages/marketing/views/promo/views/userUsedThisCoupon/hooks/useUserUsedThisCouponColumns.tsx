import { GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import AppLink from "../../../../../../../share/components/link/AppLink";

const useUserUsedThisCouponColumns = () => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const tableCol: GridColDef[] = [
      {
        field: "id",
        headerName: t("id"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "user",
        headerName: t("user"),
        align: "center",
        headerAlign: "center",
        flex: 1,
        renderCell: (params) => {
          return (
            <AppLink
              path={`/admin/users/clients/${params.row.userId}`}
              name={params.value}
            />
          );
        },
      },
      {
        field: "amount",
        headerName: t("amount"),
        align: "center",
        headerAlign: "center",
        flex: 1,
      },
      {
        field: "createdAt",
        headerName: t("created_at"),
        align: "center",
        headerAlign: "center",
        flex: 1,
      },
    ];
    return tableCol;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);
  return { columns };
};

export default useUserUsedThisCouponColumns;
