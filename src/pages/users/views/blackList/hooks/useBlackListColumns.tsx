import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const useBlackListColumns = ({ handleOpenDialog }: useShoppersColumnsProps) => {
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
        field: "phone",
        headerName: t("phone"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "createdAt",
        headerName: t("created_at"),
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
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              color="error"
              onClick={() => handleOpenDialog(params.id)}
            />
          );
        },
      },
    ];
    return tableCol;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);
  return { columns };
};

type useShoppersColumnsProps = {
  // eslint-disable-next-line no-unused-vars
  handleOpenDialog: (id: GridRowId) => void;
};
export default useBlackListColumns;
