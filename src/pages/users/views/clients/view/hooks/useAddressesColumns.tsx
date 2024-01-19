import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useTranslation } from "react-i18next";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const useAddressesColumns = ({
  setOpenDeleteDialog,
  setOpenInfoDialog,
}: useShoppersColumnsProps) => {
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
        field: "address",
        headerName: t("address"),
        align: "center",
        headerAlign: "center",
        width: 250,
      },
      {
        field: "isSavedAddress",
        headerName: t("is_saved_address"),
        width: 150,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "dateAdded",
        headerName: t("date_added"),
        width: 200,
        align: "center",
        headerAlign: "center",
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
              label="View"
              color="info"
              onClick={() => setOpenInfoDialog(true)}
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

type useShoppersColumnsProps = {
  setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>;
  setOpenInfoDialog: Dispatch<SetStateAction<boolean>>;
};
export default useAddressesColumns;
