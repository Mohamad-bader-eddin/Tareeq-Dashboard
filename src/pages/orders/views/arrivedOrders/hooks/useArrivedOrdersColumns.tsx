import { GridColDef } from "@mui/x-data-grid";
import ActionButton from "../../../components/ActionButton";
import { useTranslation } from "react-i18next";
import AppLink from "../../../../../share/components/link/AppLink";
import { useMemo } from "react";

const useArrivedOrdersColumns = () => {
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
        field: "customer",
        headerName: t("customer"),
        align: "center",
        headerAlign: "center",
        flex: 1,
        editable: true,
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
        // editable: true,
        // type: "singleSelect",
        // valueOptions: ["Pending", "En Route", "Canceled", "Scheduled"],
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
        field: "totalPaid",
        headerName: t("total_paid"),
        width: 100,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "arrivedAt",
        headerName: t("arrived_at"),
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
      // {
      //   field: "creditsUsed",
      //   headerName: t("credits_used"),
      //   width: 100,
      //   align: "center",
      //   headerAlign: "center",
      // },
      {
        field: "rating",
        headerName: t("rating"),
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
          return <ActionButton type="arrived" id={params.id} />;
        },
      },
    ];
    return tableCol;
  }, [t]);
  return { columns };
};

export default useArrivedOrdersColumns;
