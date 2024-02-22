import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
// import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import { Menu } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenericDialog from "../../../share/components/Dialog/GenericDialog";
// import Table from "../../../share/components/table/Table";
// import useAssignOrderToColumn from "../hooks/useAssignOrderToColumn";
// import useAssignOrderToRows from "../hooks/useAssignOrderToRows";
import { useTranslation } from "react-i18next";
import { GridRowId } from "@mui/x-data-grid";
import GenericAlert from "../../../share/components/alert/GenericAlert";
import useCancelOrderQuery from "../hooks/useCancelOrderQuery";
import useAvtiveOrdersQuery from "../views/activeOrders/hooks/useAvtiveOrdersQuery";
import usePendingOrdersQuery from "../views/pendingOrders/hooks/usePendingOrdersQuery";
import useScheduleOrdersQuery from "../views/scheduleOrders/hooks/useScheduleOrdersQuery";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import useBreakOrderQuery from "../hooks/useBreakOrderQuery";
import useReactivateOrderQuery from "../hooks/useReactivateOrderQuery";
import { getErrorMessage } from "../../../share/utils/getErrorMessage";
import useCanceledOrdersQuery from "../views/canceledOrders/hooks/useCanceledOrdersQuery";

const ActionButton = ({ type, id }: ActionButtonProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { refetch: activeRefetch } = useAvtiveOrdersQuery();
  const { refetch: pendingRefetch } = usePendingOrdersQuery();
  const { refetch: scheduleRefetch } = useScheduleOrdersQuery();
  const { refetch: canceledRefetch } = useCanceledOrdersQuery();
  const [openErrorCancel, setOpenErrorCancel] = useState(false);
  const [errorMsgCancel, setErrorMsgCancel] = useState("");
  const [openSucssesCancel, setOpenSucssesCancel] = useState(false);
  const [msgCancel, setMsgCancel] = useState("");
  // const [msgReactivate, setMsgReactivate] = useState("");
  const [openErrorReactivate, setOpenErrorReactivate] = useState(false);
  const [errorMsgReactivate, setErrorMsgReactivate] = useState("");
  // const [openSucssesReactivate, setOpenSucssesReactivate] = useState(false);
  const { mutate } = useCancelOrderQuery();
  const { mutate: breakMutate } = useBreakOrderQuery();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openCancelDialog, setOPenCancelDialog] = useState(false);
  const [openReactivateDialog, setOPenReactivateDialog] = useState(false);
  const [openBreakDialog, setOpenBreakDialog] = useState(false);
  const { mutate: reactivateMutate } = useReactivateOrderQuery();
  // const { columns } = useAssignOrderToColumn();
  // const { initialRows } = useAssignOrderToRows();
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
  const handleReactivate = () => {
    setOPenReactivateDialog(true);
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
        if (type === "active") {
          activeRefetch();
        } else if (type === "pending") {
          pendingRefetch();
        } else if (type === "schedule") {
          scheduleRefetch();
        }
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
  const handleBreak = () => {
    setOpenBreakDialog(true);
    setAnchorEl(null);
  };
  const handelAgreeBreak = () => {
    breakMutate(id as GridRowId, {
      onSuccess: (response) => {
        setOpenSucssesCancel(true);
        setMsgCancel(response.data.message);
        if (type === "active") {
          activeRefetch();
        }
        setOpenBreakDialog(false);
      },
      onError: (error) => {
        const err = error as Error;
        setOpenErrorCancel(true);
        setErrorMsgCancel(err.message);
        setOpenBreakDialog(false);
      },
    });
  };
  const handleAgreeReactivate = () => {
    reactivateMutate(id as GridRowId, {
      onSuccess: () => {
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
        {(type === "pending" || type === "active" || type === "schedule") && (
          <MenuItem onClick={handleTrack} disableRipple>
            <TravelExploreIcon sx={{ marginInlineEnd: "15px" }} />
            {t("track")}
          </MenuItem>
        )}
        <MenuItem onClick={handleInfo} disableRipple>
          <HelpOutlineIcon sx={{ marginInlineEnd: "15px" }} />
          {t("info")}
        </MenuItem>
        {type === "canceled" && (
          <MenuItem onClick={handleReactivate} disableRipple>
            <AutorenewIcon sx={{ marginInlineEnd: "15px" }} />
            {t("re_active")}
          </MenuItem>
        )}
        {type === "active" && (
          <MenuItem onClick={handleBreak} disableRipple>
            <DoDisturbOnIcon sx={{ marginInlineEnd: "15px" }} />
            {t("break")}
          </MenuItem>
        )}
        {(type === "pending" || type === "active" || type === "schedule") && (
          <MenuItem onClick={handleCancel} disableRipple>
            <DoDisturbIcon sx={{ marginInlineEnd: "15px" }} />
            {t("cancel")}
          </MenuItem>
        )}
      </Menu>
      <GenericDialog
        open={openReactivateDialog}
        setOpen={setOPenReactivateDialog}
        handleAgree={handleAgreeReactivate}
        elementContent={t("reactivate_order_message")}
      />
      <GenericDialog
        open={openCancelDialog}
        setOpen={setOPenCancelDialog}
        elementContent={t("cancel_order_message")}
        handleAgree={handelAgreeCancel}
      />
      <GenericDialog
        open={openBreakDialog}
        setOpen={setOpenBreakDialog}
        elementContent={t("block_order_message")}
        handleAgree={handelAgreeBreak}
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
      <GenericAlert
        open={openErrorReactivate}
        setOpen={setOpenErrorReactivate}
        type="error"
        msg={errorMsgReactivate}
      />
      {/* <GenericAlert
        open={openSucssesReactivate}
        setOpen={setOpenSucssesReactivate}
        type="success"
        msg={msgReactivate}
      /> */}
    </div>
  );
};

type ActionButtonProps = {
  type: "active" | "pending" | "arrived" | "canceled" | "schedule";
  id?: GridRowId;
};

export default ActionButton;
