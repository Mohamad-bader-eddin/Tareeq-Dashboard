import { GridColDef } from "@mui/x-data-grid";
import ActionButton from "../../../components/ActionButton";
import { useTranslation } from "react-i18next";
import AppLink from "../../../../../share/components/link/AppLink";
import { useMemo } from "react";

const useActiveOrdersContainerColumn = () => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const tableCol: GridColDef[] = [
      {
        field: "id",
        headerName: t("id"),
        width: 100,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "customer",
        headerName: t("customer"),
        align: "center",
        headerAlign: "center",
        width: 200,
        renderCell: (params) => {
          return (
            <AppLink
              path={`/dashboard/users/clients/${params.row.customerId}`}
              name={params.value}
            />
          );
        },
      },
      {
        field: "status",
        headerName: t("status"),
        width: 100,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "totalExpected",
        headerName: t("total_expected"),
        width: 200,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "placedon",
        headerName: t("placed_on"),
        width: 225,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "shopper",
        headerName: t("shopper"),
        width: 150,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
          return (
            <AppLink
              path={`/dashboard/users/shoppers/${params.row.shopperId}`}
              name={params.value}
            />
          );
        },
      },
      {
        field: "action",
        headerName: t("action"),
        width: 150,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
          return <ActionButton type="active" id={params.id} />;
        },
      },
    ];
    return tableCol;
  }, [t]);
  return { columns };
};

export default useActiveOrdersContainerColumn;
