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

const ActionButton = ({ type, id }: ActionButtonProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { refetch: activeRefetch } = useAvtiveOrdersQuery();
  const { refetch: pendingRefetch } = usePendingOrdersQuery();
  const { refetch: scheduleRefetch } = useScheduleOrdersQuery();
  const [openErrorCancel, setOpenErrorCancel] = useState(false);
  const [errorMsgCancel, setErrorMsgCancel] = useState("");
  const [openSucssesCancel, setOpenSucssesCancel] = useState(false);
  const [msgCancel, setMsgCancel] = useState("");
  const { mutate } = useCancelOrderQuery();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openCancelDialog, setOPenCancelDialog] = useState(false);
  // const [openAssignDialog, setOPenAssignDialog] = useState(false);
  const [openBreakDialog, setOpenBreakDialog] = useState(false);
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
    navigate(`/orders/track-order/${type}`);
    setAnchorEl(null);
  };
  const handleInfo = () => {
    navigate(`/orders/info-orders/${type}`);
    setAnchorEl(null);
  };
  // const handleAssignTo = () => {
  //   // setOPenAssignDialog(true);
  //   setAnchorEl(null);
  // };
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
        {/* {type === "pending" && (
          <MenuItem onClick={handleAssignTo} disableRipple>
            <AssignmentTurnedInIcon sx={{ marginInlineEnd: "15px" }} />
            {t("assign_to")}
          </MenuItem>
        )} */}
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
      {/* <GenericDialog
        open={openAssignDialog}
        setOpen={setOPenAssignDialog}
        fullScreen={true}
        handleAgree={() => {}}
        elementContent={
          <Table columns={columns} rows={initialRows} loading={false} />
        }
      /> */}
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
        handleAgree={() => {}}
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
