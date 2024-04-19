import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GridRowId } from "@mui/x-data-grid";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import useMedeaQueries from "../../../../../share/utils/useMideaQuery";

const ActionButton = ({ type, id }: ActionButtonProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { laptop } = useMedeaQueries();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
            fontSize="small"
            sx={{ marginInlineEnd: "15px" }}
          />
          {t("track")}
        </MenuItem>
        <MenuItem onClick={handleInfo} disableRipple sx={{ fontSize: "14px" }}>
          <HelpOutlineIcon fontSize="small" sx={{ marginInlineEnd: "15px" }} />
          {t("info")}
        </MenuItem>
      </Menu>
    </div>
  );
};

type ActionButtonProps = {
  type: "active" | "pending" | "arrived" | "canceled" | "schedule";
  id?: GridRowId;
};

export default ActionButton;
