import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const useTransactionTypeColumns = ({
  handleOpenDialog,
  handleInfo,
}: useTransactionTypeColumnsProps) => {
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
        field: "type",
        headerName: t("type"),
        align: "center",
        headerAlign: "center",
        flex: 1,
      },
      {
        field: "description",
        headerName: t("description"),
        align: "center",
        headerAlign: "center",
        flex: 1,
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

type useTransactionTypeColumnsProps = {
  // eslint-disable-next-line no-unused-vars
  handleOpenDialog: (id: GridRowId) => void;
  // eslint-disable-next-line no-unused-vars
  handleInfo: (id: GridRowId) => void;
};
export default useTransactionTypeColumns;
