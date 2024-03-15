import { GridActionsCellItem, GridRowId } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const useAdminNotesColumns = ({
  handleOpenDialog,
}: useAdminNotesColumnsProps) => {
  const { t } = useTranslation();
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: t("id"),
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "admin",
      headerName: t("admin"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "note",
      headerName: t("note"),
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
        return [
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
  return { columns };
};
type useAdminNotesColumnsProps = {
  // eslint-disable-next-line no-unused-vars
  handleOpenDialog: (id: GridRowId) => void;
};
export default useAdminNotesColumns;
