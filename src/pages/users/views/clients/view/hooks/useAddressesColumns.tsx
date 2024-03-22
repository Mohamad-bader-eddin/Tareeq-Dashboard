import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import PreviewIcon from "@mui/icons-material/Preview";
import { Address } from "../../types/clients";
// import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const useAddressesColumns = ({ handleInfoAdress }: useShoppersColumnsProps) => {
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
        field: "address",
        headerName: t("saved_address"),
        align: "center",
        headerAlign: "center",
        flex: 1,
      },
      {
        field: "dateAdded",
        headerName: t("date_added"),
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
              onClick={() => handleInfoAdress({ data: params.row })}
            />,
            // <GridActionsCellItem
            //   icon={<DeleteIcon />}
            //   label="Delete"
            //   color="error"
            //   onClick={() => setOpenDeleteDialog(true)}
            // />,
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
  // setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line no-unused-vars
  handleInfoAdress: ({ data }: { data: Address }) => void;
};
export default useAddressesColumns;
