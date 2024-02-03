import { Button } from "@mui/material";
import PaperContainer from "../../../share/components/Paper/PaperContainer";
import Layout from "../../../share/components/layout/Layout";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useTranslation } from "react-i18next";
import useSliderQuery from "../hooks/useSliderQuery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GridRowId } from "@mui/x-data-grid";
import useSliderColumn from "../hooks/useSliderColumn";
import useSliderRows from "../hooks/useSliderRows";
import GenericAlert from "../../../share/components/alert/GenericAlert";
import GenericDialog from "../../../share/components/Dialog/GenericDialog";
import Table from "../../../share/components/table/Table";
import useSliderDeleteQuery from "../hooks/useSliderDeleteQuery";

const SliderContainer = () => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedId, setSelectedId] = useState<GridRowId | null>(null);
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const { data, isLoading, refetch } = useSliderQuery();
  const { mutate } = useSliderDeleteQuery();
  const navigate = useNavigate();
  const handleInfo = (id: GridRowId) => {
    navigate(`/admin/slider/${id}`);
  };
  const handleOpenDialog = (id: GridRowId) => {
    setOpenDeleteDialog(true);
    setSelectedId(id);
  };
  const { columns } = useSliderColumn({ handleInfo, handleOpenDialog });
  const { rows } = useSliderRows({ data: data?.data.content });

  const handleAddSlide = () => {
    navigate("/admin/slider/add-slide");
  };
  const handleAgree = () => {
    mutate(selectedId as GridRowId, {
      onSuccess: (response) => {
        setOpenSucsses(true);
        setMsg(response.data.message);
        setOpenDeleteDialog(false);
        refetch();
      },
      onError: (error) => {
        const err = error as Error;
        setOpenError(true);
        setErrorMsg(err.message);
        setOpenDeleteDialog(false);
      },
    });
  };

  return (
    <Layout>
      <PaperContainer>
        <Button
          variant="outlined"
          endIcon={<AddPhotoAlternateIcon />}
          onClick={handleAddSlide}
          size="small"
          sx={{
            ".css-9tj150-MuiButton-endIcon": {
              marginInline: "8px -4px !important",
            },
            mb: "20px",
          }}
        >
          {t("add_slide")}
        </Button>
        <Table
          columns={columns}
          rows={rows}
          loading={isLoading}
          title={t("slider")}
          totalCount={data?.data.content.length}
        />
        <GenericDialog
          open={openDeleteDialog}
          setOpen={setOpenDeleteDialog}
          handleAgree={handleAgree}
          deleteType={true}
          elementContent={t("delete_message")}
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

export default SliderContainer;
