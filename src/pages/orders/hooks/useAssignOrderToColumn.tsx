import { GridColDef, GridRowId } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";

const useAssignOrderToColumn = ({
  handleAssignOrder,
}: useAssignOrderToColumnProps) => {
  const { t } = useTranslation();
  const columns: GridColDef[] = [
    {
      field: "shopper",
      headerName: t("shopper"),
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "completedTripsToday",
      headerName: t("completed_trips_today"),
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
      field: "action",
      headerName: t("assign_to"),
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Box>
            <Button variant="text" onClick={() => handleAssignOrder(params.id)}>
              choose
            </Button>
          </Box>
        );
      },
    },
  ];
  return { columns };
};

type useAssignOrderToColumnProps = {
  // eslint-disable-next-line no-unused-vars
  handleAssignOrder: (id: GridRowId) => void;
};
export default useAssignOrderToColumn;
