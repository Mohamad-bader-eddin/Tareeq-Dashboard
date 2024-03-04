import { Backdrop, Button, Stack } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import { useTranslation } from "react-i18next";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import { useEffect, useMemo, useState } from "react";
import { GridRowId } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import useOperationTimeContainerColumns from "../hooks/useOperationTimeContainerColumns";
import useOperationTimeContainerRows from "../hooks/useOperationTimeContainerRows";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import Table from "../../../../../share/components/table/Table";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import useOperationTimesQuery from "../hooks/useOperationTimesQuery";
import useDeleteOperationTimesQuery from "../hooks/useDeleteOperationTimesQuery";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";
import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";
import Spinner from "../../../../../share/components/Spinner";
import useManagementQuery from "../../../hooks/useManagementQuery";
import { Management } from "../../../types";
import useUpdateManagementQuery from "../../../hooks/useUpdateManagementQuery";

const OperationTimeContainer = () => {
  const { t } = useTranslation();
  const [click, setClick] = useState(true);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { data, isLoading, isFetching, refetch } = useOperationTimesQuery();
  const navigate = useNavigate();
  const { data: managementData, isLoading: managementLoading } =
    useManagementQuery();
  const alwaysRun = useMemo(() => {
    return managementData?.data.content?.find(
      (el: Management) => el.key === "always_run"
    );
  }, [managementData?.data.content]);
  const { mutate: managementMutate, isLoading: updateManagementLoading } =
    useUpdateManagementQuery();
  const handleAddAppVarialbesPeriod = () => {
    navigate("/admin/management/add-operation-time");
  };
  const handleInfo = (id: GridRowId) => {
    navigate(`/admin/management/operation-time/${id}`);
  };
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const { columns } = useOperationTimeContainerColumns({
    handleInfo,
    handleOpenDialog,
  });
  const { rows } = useOperationTimeContainerRows({ data: data?.data.content });
  const { mutate } = useDeleteOperationTimesQuery();
  const handleAgree = () => {
    mutate(selectedId as GridRowId, {
      onSuccess: (response) => {
        setOpenSucsses(true);
        setMsg(response.data.message);
        setOpenDeleteDialog(false);
        refetch();
      },
      onError: (error) => {
        setOpenError(true);
        setErrorMsg(getErrorMessage(error));
        setOpenDeleteDialog(false);
      },
    });
  };

  const handleClick = () => {
    managementMutate(
      {
        key: "always_run",
        value: click ? "false" : "true",
      },
      {
        onSuccess: (response) => {
          setOpenSucsses(true);
          setClick((prev) => !prev);
          setMsg(response.data.message);
        },
        onError: (error) => {
          setOpenError(true);
          setErrorMsg(getErrorMessage(error));
        },
      }
    );
  };

  useEffect(() => {
    if (alwaysRun?.value === "true") {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [alwaysRun]);

  return (
    <Layout>
      <PaperContainer>
        <Stack direction={"row"} alignItems={"center"}>
          <Button
            variant="outlined"
            endIcon={<AddAlarmIcon />}
            size="small"
            onClick={handleAddAppVarialbesPeriod}
            sx={{
              ".css-9tj150-MuiButton-endIcon": {
                marginInline: "8px -4px !important",
              },
              mb: "20px",
              marginInlineEnd: "20px",
            }}
          >
            {t("add_operation_time")}
          </Button>
          <Button
            variant="outlined"
            color={click ? "success" : "error"}
            endIcon={<FiberManualRecordSharpIcon />}
            onClick={handleClick}
            size="small"
            sx={{
              mb: "20px",
              ".css-9tj150-MuiButton-endIcon": {
                marginInline: "8px -4px !important",
              },
            }}
          >
            {t("is_always_run")} {click ? t("on") : t("off")}
          </Button>
        </Stack>
        {managementLoading || updateManagementLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <Spinner />
          </Backdrop>
        ) : null}
        <Table
          columns={columns}
          rows={rows}
          title={t("operation_time")}
          totalCount={data?.data.content.length}
          loading={isLoading || isFetching}
        />
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          elementContent={t("delete_message")}
          handleAgree={handleAgree}
          deleteType={true}
        />
        <GenericAlert
          open={openSucsses}
          setOpen={setOpenSucsses}
          type="success"
          msg={msg}
        />
        <GenericAlert
          open={openError}
          setOpen={setOpenError}
          type="error"
          msg={errorMsg}
        />
      </PaperContainer>
    </Layout>
  );
};

export default OperationTimeContainer;
