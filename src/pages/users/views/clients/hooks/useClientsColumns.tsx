import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// import CheckIcon from "@mui/icons-material/Check";
// import CloseIcon from "@mui/icons-material/Close";

const useShoppersColumns = ({
  handleOpenDialog,
  handleInfo,
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
        field: "name",
        headerName: t("name"),
        align: "center",
        headerAlign: "center",
        width: 250,
      },
      {
        field: "phone",
        headerName: t("phone"),
        width: 150,
        align: "center",
        headerAlign: "center",
      },
      // {
      //   field: "platform",
      //   headerName: t("platform"),
      //   width: 200,
      //   align: "center",
      //   headerAlign: "center",
      // },
      {
        field: "joinDate",
        headerName: t("join_date"),
        width: 200,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "firstOrderDate",
        headerName: t("first_order_date"),
        width: 200,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "completedOrders",
        headerName: t("completed_orders"),
        width: 150,
        align: "center",
        headerAlign: "center",
      },
      // {
      //   field: "isVerified",
      //   headerName: t("is_verified?"),
      //   width: 150,
      //   align: "center",
      //   headerAlign: "center",
      //   renderCell: (params) => {
      //     if (params.value) {
      //       return <CheckIcon color="success" />;
      //     } else {
      //       return <CloseIcon color="error" />;
      //     }
      //   },
      // },
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

type useShoppersColumnsProps = {
  // eslint-disable-next-line no-unused-vars
  handleOpenDialog: (id: GridRowId) => void;
  // eslint-disable-next-line no-unused-vars
  handleInfo: (id: GridRowId) => void;
};
export default useShoppersColumns;
