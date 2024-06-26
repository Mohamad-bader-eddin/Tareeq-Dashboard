import { Backdrop, Box, Button, Stack } from "@mui/material";
import PaperContainer from "../../../../../share/components/Paper/PaperContainer";
import Layout from "../../../../../share/components/layout/Layout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
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
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";
import useExportDriversQuery from "../hooks/useExportDriversQuery";
import ServerTable from "../../../../../share/components/table/ServerTable";
import { format } from "date-fns";
import ExportButton from "../../../../../share/components/exportButton/ExportButton";
import { UserQueryFilterType } from "../../../types/QueryType";
import AdvanceSearchDialog from "../components/AdvanceSearchDialog";

const ShoppersContainer = () => {
  const { mobileL } = useMedeaQueries();
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const [openAdvanceSearchDialog, setOpenAdvanceSearchDialog] = useState(false);
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [queryParams, setQueryParams] = useState<UserQueryFilterType>(
    {} as UserQueryFilterType
  );
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
  const { mutate, isLoading: deleteLoading } = useDriverDeleteQuery();
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const { data, isLoading, refetch } = useDeiversQuery({
    page: paginationModel.page,
    limit: paginationModel.pageSize,
    id: queryParams.id,
    phone: queryParams.phone,
    name: queryParams.name,
    last_name: queryParams.last_name,
  });
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
  const { mutate: downloadDrivers, isLoading: exportLoading } =
    useExportDriversQuery();
  const [openDialog, setOpenDialog] = useState(false);
  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);
  const handleExportClick = () => {
    setOpenDialog((prev) => !prev);
  };
  const handleAgreeDownload = () => {
    downloadDrivers(
      {
        from: from ? format(from, "yyyy-MM-dd") : "",
        to: to ? format(to, "yyyy-MM-dd") : "",
      },
      {
        onSuccess: (response) => {
          const url = window.URL.createObjectURL(new Blob([response?.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `drivers.xlsx`); // Set the filename
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setFrom(null);
          setTo(null);
          setOpenDialog(false);
        },
      }
    );
  };
  const handleSearchClick = () => {
    setOpenAdvanceSearchDialog((prev) => !prev);
  };
  const handleSearchAgree = () => {
    setQueryParams({
      id: id,
      name: name,
      phone: phone,
      last_name: lastName,
    });
    refetch();
    setOpenAdvanceSearchDialog(false);
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
            <ExportButton
              handleClick={handleExportClick}
              openDialog={openDialog}
              setOpenDialog={setOpenDialog}
              from={from}
              setFrom={setFrom}
              to={to}
              setTo={setTo}
              handleAgree={handleAgreeDownload}
              agreeLoading={exportLoading}
            />
          </Box>
          <Box sx={{ marginInlineStart: "15px" }}>
            <AdvanceSearchDialog
              openDialog={openAdvanceSearchDialog}
              setOpenDialog={setOpenAdvanceSearchDialog}
              id={id}
              setId={setId}
              phone={phone}
              setPhone={setPhone}
              name={name}
              setName={setName}
              handleAgree={handleSearchAgree}
              handleClick={handleSearchClick}
              lastName={lastName}
              setLastName={setLastName}
            />
          </Box>
        </Stack>
        <ServerTable
          columns={columns}
          rows={rows}
          title={t("drivers")}
          totalCount={data?.data.total}
          loading={isLoading}
          paginationModel={paginationModel}
          setPaginationModel={setPaginationModel}
          rowCount={data?.data.total}
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
          agreeLoading={deleteLoading}
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
