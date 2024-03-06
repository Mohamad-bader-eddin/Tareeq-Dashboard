import { Backdrop, Box, Button, Stack } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Table from "../../../../../share/components/table/Table";
import useShoppersColumns from "../hooks/useShoppersColumns";
import useShoppersRows from "../hooks/useShoppersRows";
import { useState } from "react";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import useDeiversQuery from "../hooks/useDeiversQuery";
import { GridRowId } from "@mui/x-data-grid";
import useDriverDeleteQuery from "../hooks/useDriverDeleteQuery";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";
import useChangeAvailabilityQuery from "../hooks/useChangeAvailabilityQuery";
import Spinner from "../../../../../share/components/Spinner";
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";

const ShoppersContainer = () => {
  const { mobileL } = useMedeaQueries();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutate: availabilityMutate, isLoading: availabilityLoading } =
    useChangeAvailabilityQuery();
  const handleInfo = (id: GridRowId) => {
    navigate(`/admin/users/shoppers/${id}`);
  };
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const handleChangeStatus = (id: GridRowId, onLine: boolean) => {
    availabilityMutate(
      {
        availability: onLine ? 0 : 1,
        driver_id: id,
      },
      {
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
      }
    );
  };
  const { columns } = useShoppersColumns({
    handleOpenDialog,
    handleInfo,
    handleChangeStatus,
  });
  const handleAddShopper = () => {
    navigate("/admin/users/shoppers/add-shopper");
  };
  const { mutate } = useDriverDeleteQuery();
  const { data, isLoading, refetch, isFetching } = useDeiversQuery();
  const { rows } = useShoppersRows({ data: data?.data.content });
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
  return (
    <Layout>
      <PaperContainer>
        <Stack
          direction={mobileL ? "column" : "row"}
          alignItems={mobileL ? "start" : "center"}
        >
          <Button
            variant="outlined"
            endIcon={<PersonAddIcon />}
            onClick={handleAddShopper}
            size="small"
            sx={{
              ".css-9tj150-MuiButton-endIcon": {
                marginInline: "8px -4px !important",
              },
              mb: "20px",
            }}
          >
            {t("add_shopper")}
          </Button>
          <Box sx={{ marginInlineStart: mobileL ? "0" : "20px" }}>
            <ExportButton handleClick={() => {}} />
          </Box>
        </Stack>
        <Table
          columns={columns}
          rows={rows}
          title={t("drivers")}
          totalCount={data?.data.content.length}
          loading={isLoading || isFetching}
        />
        {availabilityLoading ? (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={availabilityLoading}
          >
            <Spinner />
          </Backdrop>
        ) : null}
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          deleteType={true}
          elementContent={t("delete_message")}
          handleAgree={handleAgree}
        />
        <GenericAlert
          open={openError}
          setOpen={setOpenError}
          type="error"
          msg={errorMsg}
        />
        <GenericAlert
          open={openSucsses}
          setOpen={setOpenSucsses}
          type="success"
          msg={msg}
        />
      </PaperContainer>
    </Layout>
  );
};

export default ShoppersContainer;
