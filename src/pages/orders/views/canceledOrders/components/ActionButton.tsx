import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GridRowId } from "@mui/x-data-grid";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import useCanceledOrdersQuery from "../hooks/useCanceledOrdersQuery";
import useReactivateOrderQuery from "../../../hooks/useReactivateOrderQuery";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";
import { PaginationModel } from "../../../../../share/types";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";

const ActionButton = ({ type, id, page }: ActionButtonProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { laptop } = useMedeaQueries();
  const { refetch: canceledRefetch } = useCanceledOrdersQuery({
    page: page.page,
    limit: page.pageSize,
  });
  const [openErrorReactivate, setOpenErrorReactivate] = useState(false);
  const [errorMsgReactivate, setErrorMsgReactivate] = useState("");
  const [openSucssesReactivate, setOpenSucssesReactivate] = useState(false);
  const [msgReactivate, setMsgReactivate] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openReactivateDialog, setOPenReactivateDialog] = useState(false);
  const { mutate: reactivateMutate, isLoading } = useReactivateOrderQuery();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleInfo = () => {
    navigate(`/admin/orders/info-orders/${type}/${id}`);
    setAnchorEl(null);
  };
  const handleReactivate = () => {
    setOPenReactivateDialog(true);
    setAnchorEl(null);
  };

  const handleAgreeReactivate = () => {
    reactivateMutate(id as GridRowId, {
      onSuccess: (response) => {
        setOpenSucssesReactivate(true);
        setMsgReactivate(response.data.message);
        canceledRefetch();
        setOPenReactivateDialog(false);
      },
      onError: (error) => {
        setOpenErrorReactivate(true);
        setErrorMsgReactivate(getErrorMessage(error));
        setOPenReactivateDialog(false);
      },
    });
  };
  const handleTrack = () => {
    navigate(`/admin/orders/track-order/${type}/${id}`);
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        variant="outlined"
        color="info"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        size="small"
        sx={{
          fontSize: laptop ? "8px" : "12px",
          ".css-9tj150-MuiButton-endIcon": {
            marginInline: "8px -4px !important",
          },
        }}
      >
        {t("actions")}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleTrack} disableRipple sx={{ fontSize: "14px" }}>
          <TravelExploreIcon
            sx={{ marginInlineEnd: "15px" }}
            fontSize="small"
          />
          {t("track")}
        </MenuItem>
        <MenuItem onClick={handleInfo} disableRipple sx={{ fontSize: "14px" }}>
          <HelpOutlineIcon sx={{ marginInlineEnd: "15px" }} fontSize="small" />
          {t("info")}
        </MenuItem>
        <MenuItem
          onClick={handleReactivate}
          disableRipple
          sx={{ fontSize: "14px" }}
        >
          <AutorenewIcon sx={{ marginInlineEnd: "15px" }} fontSize="small" />
          {t("re_active")}
        </MenuItem>
      </Menu>
      <GenericDialog
        open={openReactivateDialog}
        setOpen={setOPenReactivateDialog}
        handleAgree={handleAgreeReactivate}
        elementContent={t("reactivate_order_message")}
        agreeLoading={isLoading}
      />
      <GenericAlert
        open={openErrorReactivate}
        setOpen={setOpenErrorReactivate}
        type="error"
        msg={errorMsgReactivate}
        inRow={true}
      />
      <GenericAlert
        open={openSucssesReactivate}
        setOpen={setOpenSucssesReactivate}
        type="success"
        msg={msgReactivate}
        inRow={true}
      />
    </div>
  );
};

type ActionButtonProps = {
  type: "active" | "pending" | "arrived" | "canceled" | "schedule";
  id?: GridRowId;
  page: PaginationModel;
};

export default ActionButton;
