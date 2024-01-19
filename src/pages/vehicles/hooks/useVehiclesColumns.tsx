import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const useVehiclesColumns = ({
  handleOpenDialog,
  handleInfo,
}: useVehiclesColumnsProps) => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const tableCol: GridColDef[] = [
      {
        field: "id",
        headerName: t("id"),
        width: 150,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "name",
        headerName: t("name"),
        align: "center",
        headerAlign: "center",
        width: 250,
      },
      {
        field: "priceByTime",
        headerName: t("price_by_time"),
        width: 150,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "priceByKm",
        headerName: t("price_by_km"),
        width: 200,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "createdAt",
        headerName: t("created_at"),
        width: 300,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "action",
        headerName: t("action"),
        width: 150,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
          return [
            <GridActionsCellItem
              icon={<PreviewIcon />}
              label="View"
              color="info"
              onClick={() => handleInfo(params.id)}
            />,
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              color="error"
              onClick={() => handleOpenDialog(params.id)}
            />,
          ];
        },
      },
    ];
    return tableCol;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);
  return { columns };
};

type useVehiclesColumnsProps = {
  // eslint-disable-next-line no-unused-vars
  handleOpenDialog: (id: GridRowId) => void;
  // eslint-disable-next-line no-unused-vars
  handleInfo: (id: GridRowId) => void;
};
export default useVehiclesColumns;
