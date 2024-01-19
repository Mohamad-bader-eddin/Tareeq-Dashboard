import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import PreviewIcon from "@mui/icons-material/Preview";

const useMessagesColumns = ({
  setOpenDeleteDialog,
  handleMessageInfo,
}: useMessagesColumnsProps) => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const tableCol: GridColDef[] = [
      {
        field: "fullName",
        headerName: t("full_name"),
        width: 200,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "phone",
        headerName: t("phone"),
        align: "center",
        headerAlign: "center",
        width: 250,
      },
      {
        field: "email",
        headerName: t("email"),
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
              icon={<PreviewIcon />}
              label="view"
              color="info"
              onClick={() => handleMessageInfo()}
            />,
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

type useMessagesColumnsProps = {
  setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>;
  handleMessageInfo: () => void;
};
export default useMessagesColumns;
