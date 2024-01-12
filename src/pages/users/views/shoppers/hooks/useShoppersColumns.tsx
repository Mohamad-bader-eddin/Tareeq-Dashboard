import { Button, Checkbox } from "@mui/material";
import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useTranslation } from "react-i18next";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const useShoppersColumns = ({
  setOpenDeleteDialog,
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
        width: 200,
        editable: true,
      },
      {
        field: "phone",
        headerName: t("phone"),
        width: 200,
        editable: true,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "zone",
        headerName: t("zone"),
        width: 200,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "registerDate",
        headerName: t("register_date"),
        width: 250,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "lastOnline",
        headerName: t("last_online"),
        width: 250,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
          if (params.value) {
            return params.value;
          }
          return (
            <Button
              endIcon={<FiberManualRecordIcon />}
              color="success"
              sx={{ cursor: "default" }}
            >
              {t("online")}
            </Button>
          );
        },
      },
      {
        field: "completedOrdersToday",
        headerName: t("completed_orders_today"),
        width: 300,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "shopperEarning",
        headerName: t("shopper_earning"),
        width: 250,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "online",
        headerName: t("online"),
        width: 100,
        align: "center",
        headerAlign: "center",
        renderCell: () => {
          return <Checkbox />;
        },
      },
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
  // eslint-disable-next-line no-unused-vars
  handleInfo: (id: GridRowId) => void;
};
export default useShoppersColumns;
