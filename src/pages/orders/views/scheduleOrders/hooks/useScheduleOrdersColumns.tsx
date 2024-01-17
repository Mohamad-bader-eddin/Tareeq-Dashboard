import { Box, Button } from "@mui/material";
import { GridColDef, GridRowId } from "@mui/x-data-grid";
import ActionButton from "../../../components/ActionButton";
import { useTranslation } from "react-i18next";
import AppLink from "../../../../../share/components/link/AppLink";
import { Dispatch, SetStateAction, useMemo } from "react";

const useScheduleOrdersColumns = ({
  setOpen,
  setIdOrder,
}: useScheduleOrdersColumnsProps) => {
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
        editable: true,
        renderCell: (params) => {
          return (
            <AppLink
              path={`/users/clients/${params.row.customerId}`}
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
        field: "scheduledAt",
        headerName: t("scheduled_at"),
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
        width: 150,
        align: "center",
        headerAlign: "center",
        renderCell: () => {
          return <ActionButton type="schedule" />;
        },
      },
    ];
    return tableCol;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { columns };
};

type useScheduleOrdersColumnsProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setIdOrder: Dispatch<SetStateAction<GridRowId | null>>;
};
export default useScheduleOrdersColumns;
