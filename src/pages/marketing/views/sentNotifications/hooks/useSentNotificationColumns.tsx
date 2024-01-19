import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const useSentNotificationColumns = ({
  setOpenDeleteDialog,
}: useSentNotificationColumnsProps) => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const tableCol: GridColDef[] = [
      {
        field: "user",
        headerName: t("user"),
        width: 200,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "userType",
        headerName: t("user_type"),
        align: "center",
        headerAlign: "center",
        width: 250,
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
        width: 250,
      },
      {
        field: "message",
        headerName: t("message"),
        align: "center",
        headerAlign: "center",
        width: 250,
      },
      {
        field: "createdAt",
        headerName: t("created_at"),
        align: "center",
        headerAlign: "center",
        width: 250,
      },
      {
        field: "action",
        headerName: t("action"),
        width: 150,
        align: "center",
        headerAlign: "center",
        renderCell: () => {
          return [
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              color="error"
              onClick={() => setOpenDeleteDialog(true)}
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
  setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>;
};
export default useSentNotificationColumns;
