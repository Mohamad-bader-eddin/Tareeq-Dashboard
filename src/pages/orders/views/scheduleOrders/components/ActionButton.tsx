import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GridRowId } from "@mui/x-data-grid";
import useScheduleOrdersQuery from "../hooks/useScheduleOrdersQuery";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import useCancelOrderQuery from "../../../hooks/useCancelOrderQuery";

const ActionButton = ({ type, id }: ActionButtonProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { refetch: scheduleRefetch } = useScheduleOrdersQuery();
  const [openErrorCancel, setOpenErrorCancel] = useState(false);
  const [errorMsgCancel, setErrorMsgCancel] = useState("");
  const [openSucssesCancel, setOpenSucssesCancel] = useState(false);
  const [msgCancel, setMsgCancel] = useState("");
  const { mutate, isLoading } = useCancelOrderQuery();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openCancelDialog, setOPenCancelDialog] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTrack = () => {
    navigate(`/admin/orders/track-order/${type}/${id}`);
    setAnchorEl(null);
  };
  const handleInfo = () => {
    navigate(`/admin/orders/info-orders/${type}/${id}`);
    setAnchorEl(null);
  };
  const handleCancel = () => {
    setOPenCancelDialog(true);
    setAnchorEl(null);
  };
  const handelAgreeCancel = () => {
    mutate(id as GridRowId, {
      onSuccess: (response) => {
        setOpenSucssesCancel(true);
        setMsgCancel(response.data.message);
        scheduleRefetch();
        setOPenCancelDialog(false);
      },
      onError: (error) => {
        const err = error as Error;
        setOpenErrorCancel(true);
        setErrorMsgCancel(err.message);
        setOPenCancelDialog(false);
      },
    });
  };
  return (
    <div>
      <Button
        variant="outlined"
        color="info"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          ".css-9tj150-MuiButton-endIcon": {
            marginInline: "8px -4px !important",
          },
        }}
      >
        {t("actions")}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleTrack} disableRipple>
          <TravelExploreIcon sx={{ marginInlineEnd: "15px" }} />
          {t("track")}
        </MenuItem>
        <MenuItem onClick={handleInfo} disableRipple>
          <HelpOutlineIcon sx={{ marginInlineEnd: "15px" }} />
          {t("info")}
        </MenuItem>
        <MenuItem onClick={handleCancel} disableRipple>
          <DoDisturbIcon sx={{ marginInlineEnd: "15px" }} />
          {t("cancel")}
        </MenuItem>
      </Menu>
      <GenericDialog
        open={openCancelDialog}
        setOpen={setOPenCancelDialog}
        elementContent={t("cancel_order_message")}
        handleAgree={handelAgreeCancel}
        agreeLoading={isLoading}
      />
      <GenericAlert
        open={openErrorCancel}
        setOpen={setOpenErrorCancel}
        type="error"
        msg={errorMsgCancel}
      />
      <GenericAlert
        open={openSucssesCancel}
        setOpen={setOpenSucssesCancel}
        type="success"
        msg={msgCancel}
      />
    </div>
  );
};

type ActionButtonProps = {
  type: "active" | "pending" | "arrived" | "canceled" | "schedule";
  id?: GridRowId;
};

export default ActionButton;
