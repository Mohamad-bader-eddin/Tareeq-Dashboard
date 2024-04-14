import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import { Menu } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GridRowId } from "@mui/x-data-grid";
import useAvtiveOrdersQuery from "../hooks/useAvtiveOrdersQuery";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import useCancelOrderQuery from "../../../hooks/useCancelOrderQuery";
import useBreakOrderQuery from "../../../hooks/useBreakOrderQuery";
import { getErrorMessage } from "../../../../../share/utils/getErrorMessage";
import GenericAlert from "../../../../../share/components/alert/GenericAlert";
import { PaginationModel } from "../../../../../share/types";

const ActionButton = ({ type, id, page }: ActionButtonProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { refetch: activeRefetch } = useAvtiveOrdersQuery({
    page: page.page,
    limit: page.pageSize,
  });
  const [openErrorCancel, setOpenErrorCancel] = useState(false);
  const [errorMsgCancel, setErrorMsgCancel] = useState("");
  const [openSucssesCancel, setOpenSucssesCancel] = useState(false);
  const [msgCancel, setMsgCancel] = useState("");
  const { mutate, isLoading: cancelIsLoading } = useCancelOrderQuery();
  const { mutate: breakMutate, isLoading: breakIsLoading } =
    useBreakOrderQuery();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openCancelDialog, setOPenCancelDialog] = useState(false);
  const [openBreakDialog, setOpenBreakDialog] = useState(false);
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
        activeRefetch();
        setOPenCancelDialog(false);
      },
      onError: (error) => {
        setOpenErrorCancel(true);
        setErrorMsgCancel(getErrorMessage(error));
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
        activeRefetch();
        setOpenBreakDialog(false);
      },
      onError: (error) => {
        setOpenErrorCancel(true);
        setErrorMsgCancel(getErrorMessage(error));
        setOpenBreakDialog(false);
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
        size="small"
        sx={{
          fontSize: "12px",
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
        <MenuItem onClick={handleBreak} disableRipple sx={{ fontSize: "14px" }}>
          <DoDisturbOnIcon sx={{ marginInlineEnd: "15px" }} fontSize="small" />
          {t("break")}
        </MenuItem>
        <MenuItem
          onClick={handleCancel}
          disableRipple
          sx={{ fontSize: "14px" }}
        >
          <DoDisturbIcon sx={{ marginInlineEnd: "15px" }} fontSize="small" />
          {t("cancel")}
        </MenuItem>
      </Menu>
      <GenericDialog
        open={openCancelDialog}
        setOpen={setOPenCancelDialog}
        elementContent={t("cancel_order_message")}
        handleAgree={handelAgreeCancel}
        agreeLoading={cancelIsLoading}
      />
      <GenericDialog
        open={openBreakDialog}
        setOpen={setOpenBreakDialog}
        elementContent={t("block_order_message")}
        handleAgree={handelAgreeBreak}
        agreeLoading={breakIsLoading}
      />
      <GenericAlert
        open={openErrorCancel}
        setOpen={setOpenErrorCancel}
        type="error"
        msg={errorMsgCancel}
        inRow={true}
      />
      <GenericAlert
        open={openSucssesCancel}
        setOpen={setOpenSucssesCancel}
        type="success"
        msg={msgCancel}
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
