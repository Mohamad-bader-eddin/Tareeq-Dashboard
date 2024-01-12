import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";

const useAppVarialbesPeriodsColumns = ({
  setOpenDeleteDialog,
  handleAddAppVarialbesPeriod,
}: useAppVarialbesPeriodsColumnsProps) => {
  const { t } = useTranslation();
  const columns = useMemo(() => {
    const tableCol: GridColDef[] = [
      {
        field: "id",
        headerName: t("id"),
        width: 200,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "periodTimeFrom",
        headerName: t("period_time_from"),
        align: "center",
        headerAlign: "center",
        width: 250,
        editable: true,
      },
      {
        field: "periodTimeTo",
        headerName: t("period_time_to"),
        align: "center",
        headerAlign: "center",
        width: 250,
        editable: true,
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
              label="Edit"
              color="info"
              onClick={() => handleAddAppVarialbesPeriod()}
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

type useAppVarialbesPeriodsColumnsProps = {
  setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>;
  handleAddAppVarialbesPeriod: () => void;
};
export default useAppVarialbesPeriodsColumns;
