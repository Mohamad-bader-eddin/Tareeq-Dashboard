import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const useSentNotificationColumns = ({
  handleOpenDialog,
}: useSentNotificationColumnsProps) => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const tableCol: GridColDef[] = [
      {
        field: "user",
        headerName: t("user"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "userType",
        headerName: t("user_type"),
        align: "center",
        headerAlign: "center",
        flex: 1,
        // editable: true,
        // type: "singleSelect",
        // valueOptions: [
        //   t("all"),
        //   t("clients"),
        //   t("shoppers"),
        //   t("specified_user"),
        // ],
      },
      {
        field: "title",
        headerName: t("title"),
        align: "center",
        headerAlign: "center",
        flex: 1,
      },
      {
        field: "message",
        headerName: t("message"),
        align: "center",
        headerAlign: "center",
        flex: 1,
      },
      {
        field: "createdAt",
        headerName: t("created_at"),
        align: "center",
        headerAlign: "center",
        flex: 1,
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
    return tableCol;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);
  return { columns };
};

type useSentNotificationColumnsProps = {
  // eslint-disable-next-line no-unused-vars
  handleOpenDialog: (id: GridRowId) => void;
};
export default useSentNotificationColumns;
