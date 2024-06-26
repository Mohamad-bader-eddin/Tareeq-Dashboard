import { GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import { Button } from "@mui/material";

const usePromoColumns = ({
  handleInfo,
  handleOpenDialog,
  handleUserUsedThisCoupon,
}: usePromoColumnsProps) => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const tableCol: GridColDef[] = [
      {
        field: "id",
        headerName: t("id"),
        flex: 0.5,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "code",
        headerName: t("code"),
        align: "center",
        headerAlign: "center",
        flex: 1,
      },
      {
        field: "amount",
        headerName: t("amount"),
        align: "center",
        headerAlign: "center",
        flex: 1,
      },
      {
        field: "type",
        headerName: t("type"),
        align: "center",
        headerAlign: "center",
        flex: 1,
      },
      {
        field: "isActive",
        headerName: t("is_active"),
        align: "center",
        headerAlign: "center",
        flex: 1,
        renderCell: (params) => {
          if (params.value) {
            return (
              <Button color="success" sx={{ cursor: "default" }}>
                {t("active")}
              </Button>
            );
          } else
            return (
              <Button color="error" sx={{ cursor: "default" }}>
                {t("disabled")}
              </Button>
            );
        },
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
              icon={<EditIcon />}
              label="Edit"
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
      {
        field: "userUsedThisCoupon",
        headerName: t("user_used_this_coupon"),
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
          return [
            <GridActionsCellItem
              icon={<PeopleAltTwoToneIcon />}
              label="Edit"
              color="info"
              onClick={() => handleUserUsedThisCoupon(params.id)}
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

type usePromoColumnsProps = {
  // eslint-disable-next-line no-unused-vars
  handleOpenDialog: (id: GridRowId) => void;
  // eslint-disable-next-line no-unused-vars
  handleInfo: (id: GridRowId) => void;
  // eslint-disable-next-line no-unused-vars
  handleUserUsedThisCoupon: (id: GridRowId) => void;
};
export default usePromoColumns;
