import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";

const useFAQsColumns = ({
  setOpenDeleteDialog,
  handleAddFAQs,
}: useFAQsColumnsProps) => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const tableCol: GridColDef[] = [
      {
        field: "priority",
        headerName: t("priority"),
        width: 200,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "title",
        headerName: t("title"),
        align: "center",
        headerAlign: "center",
        width: 350,
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
              icon={<EditIcon />}
              label="view"
              color="info"
              onClick={() => handleAddFAQs()}
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

type useFAQsColumnsProps = {
  setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>;
  handleAddFAQs: () => void;
};
export default useFAQsColumns;
