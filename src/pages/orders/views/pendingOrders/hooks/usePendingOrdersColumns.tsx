import { Box, Button } from "@mui/material";
import { GridColDef, GridRowId } from "@mui/x-data-grid";
import ActionButton from "../../../components/ActionButton";
import { useTranslation } from "react-i18next";
import AppLink from "../../../../../share/components/link/AppLink";
import { Dispatch, SetStateAction, useMemo } from "react";

const usePendingOrdersColumns = ({
  setOpen,
  setIdOrder,
}: usePendingOrdersColumnsProps) => {
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
            <Box>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  setOpen(true);
                  setIdOrder(params.id);
                }}
              >
                {t("assign_to")}
              </Button>
            </Box>
          );
        },
      },
      {
        field: "action",
        headerName: t("action"),
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
          return <ActionButton type="pending" id={params.id} />;
        },
      },
    ];
    return tableCol;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { columns };
};

type usePendingOrdersColumnsProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setIdOrder: Dispatch<SetStateAction<GridRowId | null>>;
};
export default usePendingOrdersColumns;
