import { Button } from "@mui/material";
import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

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
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "name",
        headerName: t("name"),
        align: "center",
        headerAlign: "center",
        flex: 1,
      },
      {
        field: "phone",
        headerName: t("phone"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "zone",
        headerName: t("zone"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "registerDate",
        headerName: t("register_date"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "lastOnline",
        headerName: t("last_online"),
        flex: 1,
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
      // {
      //   field: "completedOrdersToday",
      //   headerName: t("completed_orders_today"),
      //   width: 150,
      //   align: "center",
      //   headerAlign: "center",
      // },
      {
        field: "shopperEarning",
        headerName: t("shopper_earning"),
        flex: 1,
        align: "center",
        headerAlign: "center",
      },
      // {
      //   field: "online",
      //   headerName: t("online"),
      //   width: 100,
      //   align: "center",
      //   headerAlign: "center",
      //   renderCell: () => {
      //     return <Checkbox />;
      //   },
      // },
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
            // <GridActionsCellItem
            //   icon={<PowerSettingsNewIcon />}
            //   label="OnLine"
            //   color="success"
            //   onClick={() => {}}
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
  // eslint-disable-next-line no-unused-vars
  handleOpenDialog: (id: GridRowId) => void;
  // eslint-disable-next-line no-unused-vars
  handleInfo: (id: GridRowId) => void;
};
export default useShoppersColumns;
