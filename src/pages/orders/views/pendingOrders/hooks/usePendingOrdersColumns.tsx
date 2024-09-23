import { Box, Button } from "@mui/material";
import { GridColDef, GridRowId } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { Dispatch, SetStateAction, useMemo } from "react";
import ActionButton from "../components/ActionButton";
import { PaginationModel } from "../../../../../share/types";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";
import AppLinkClient from "../../../components/AppLinkClient";

const usePendingOrdersColumns = ({
  setOpen,
  setIdOrder,
  paginationModel,
}: usePendingOrdersColumnsProps) => {
  const { t } = useTranslation();
  const { laptop } = useMedeaQueries();
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
        field: "customer",
        headerName: t("customer"),
        align: "center",
        headerAlign: "center",
        flex: 1.5,
        renderCell: (params) => {
          return (
            <AppLinkClient
              path={`/admin/users/clients/${params.row.customerId}`}
              data={params.value}
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
        field: "type",
        headerName: t("type"),
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
                size="small"
                sx={{ fontSize: laptop ? "8px" : "12px" }}
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
          return (
            <ActionButton
              type="pending"
              id={params.id}
              page={paginationModel}
            />
          );
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
  paginationModel: PaginationModel;
};
export default usePendingOrdersColumns;
