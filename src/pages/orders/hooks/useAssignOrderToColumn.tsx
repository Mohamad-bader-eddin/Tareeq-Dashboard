import { GridColDef, GridRowId } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import CheckIcon from "@mui/icons-material/Check";
import { Box, IconButton } from "@mui/material";

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
      width: 250,
      editable: true,
    },
    {
      field: "completedTripsToday",
      headerName: t("completed_trips_today"),
      width: 250,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "action",
      headerName: t("action"),
      width: 250,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          <Box>
            <IconButton onClick={() => handleAssignOrder(params.id)}>
              <CheckIcon />
            </IconButton>
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
