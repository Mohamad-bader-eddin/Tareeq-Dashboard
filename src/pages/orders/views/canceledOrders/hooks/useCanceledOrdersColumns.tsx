import { GridColDef } from "@mui/x-data-grid";
import ActionButton from "../../../components/ActionButton";
import { useTranslation } from "react-i18next";
import AppLink from "../../../../../share/components/link/AppLink";
import { useMemo } from "react";

const useCanceledOrdersColumns = () => {
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
        width: 150,
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
        // editable: true,
        // type: "singleSelect",
        // valueOptions: ["Pending", "En Route", "Canceled", "Scheduled"],
        align: "center",
        headerAlign: "center",
      },
      {
        field: "totalExpected",
        headerName: t("total_expected"),
        width: 150,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "placedon",
        headerName: t("placed_on"),
        width: 175,
        align: "center",
        headerAlign: "center",
      },
      // {
      //   field: "canceledAt",
      //   headerName: t("canceled_at"),
      //   width: 175,
      //   align: "center",
      //   headerAlign: "center",
      // },
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
        field: "reason",
        headerName: t("reason"),
        width: 100,
        align: "center",
        headerAlign: "center",
        type: "singleSelect",
        valueOptions: ["Cancel from Admin", "Cancel from client"],
      },
      {
        field: "action",
        headerName: t("action"),
        width: 150,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
          return <ActionButton type="canceled" id={params.id} />;
        },
      },
    ];
    return tableCol;
  }, [t]);
  return { columns };
};

export default useCanceledOrdersColumns;
