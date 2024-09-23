import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import AppLink from "../../../../../share/components/link/AppLink";
import { useMemo } from "react";
import ActionButton from "../components/ActionButton";
import { PaginationModel } from "../../../../../share/types";

const useActiveOrdersContainerColumn = (paginationModel: PaginationModel) => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const tableCol: GridColDef[] = [
      {
        field: "id",
        headerName: t("id"),
        flex: 0.5,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "customerName",
        headerName: t("customer"),
        align: "center",
        headerAlign: "center",
        flex: 1,
        renderCell: (params) => {
          return (
            <AppLink
              path={`/admin/users/clients/${params.row.customerId}`}
              name={params.value}
            />
          );
        },
      },
      {
        field: "status",
        headerName: t("status"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "totalExpected",
        headerName: t("total_expected"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "placedon",
        headerName: t("placed_on"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "shopper",
        headerName: t("shopper"),
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
          return (
            <AppLink
              path={`/admin/users/shoppers/${params.row.shopperId}`}
              name={params.value}
            />
          );
        },
      },
      {
        field: "type",
        headerName: t("type"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "action",
        headerName: t("action"),
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
          return (
            <ActionButton type="active" id={params.id} page={paginationModel} />
          );
        },
      },
    ];
    return tableCol;
  }, [paginationModel, t]);
  return { columns };
};

export default useActiveOrdersContainerColumn;
