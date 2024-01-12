import { GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useTranslation } from "react-i18next";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const useLocationVotesColumns = ({
  setOpenDeleteDialog,
  handleVoteInfo,
}: useLocationVotesColumnsProps) => {
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
        field: "client",
        headerName: t("client"),
        align: "center",
        headerAlign: "center",
        width: 250,
        editable: true,
      },
      {
        field: "createdAt",
        headerName: t("created_at"),
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
        renderCell: (params) => {
          return [
            <GridActionsCellItem
              icon={<GpsFixedIcon />}
              label="View"
              color="info"
              onClick={() =>
                handleVoteInfo(
                  params.api.getCellParams(params.id, "client").value as string
                )
              }
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

type useLocationVotesColumnsProps = {
  setOpenDeleteDialog: Dispatch<SetStateAction<boolean>>;
  // eslint-disable-next-line no-unused-vars
  handleVoteInfo: (clientName: string) => void;
};
export default useLocationVotesColumns;
