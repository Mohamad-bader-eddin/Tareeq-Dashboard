import { IconButton, Menu } from "@mui/material";
import React, { MouseEvent, useState } from "react";
import jsCookie from "js-cookie";
import { theme } from "../../utils/theme";
import { useDarkMode } from "../../../context/DarkMode";
import { useNotifications } from "../../../context/Notifications";

const DropdownNavbar = ({
  avatar,
  children,
  isNotification,
}: DropdownNavbarProps) => {
  const languageCode = jsCookie.get("i18next");
  const { darkMode } = useDarkMode();
  const { setNotification } = useNotifications();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    if (isNotification) {
      setNotification([]);
    }
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          width: "35px",
          height: "35px",
          "&:not(:last-child)": {
            marginInlineEnd: "15px",
          },
        }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {avatar}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            maxHeight: "300px",
            overflow: "auto",
            filter: `drop-shadow(0px 2px 8px ${
              darkMode ? theme.dark.shadow : theme.light.shadow
            })`,
            backgroundColor: darkMode
              ? theme.dark.sidebar
              : theme.light.sidebar,
            color: darkMode ? theme.dark.text : theme.light.text,
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "flex",
              position: "absolute",
              marginInline: "auto 15px",
              top: 0,
              right: 0,
              left: 0,
              width: 10,
              height: 10,
              background: darkMode ? theme.dark.sidebar : theme.light.sidebar,
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{
          horizontal: languageCode === "en" ? "right" : "left",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: languageCode === "en" ? "right" : "left",
          vertical: "bottom",
        }}
      >
        {children}
      </Menu>
    </>
  );
};

type DropdownNavbarProps = {
  avatar: React.ReactNode;
  children: React.ReactNode;
  isNotification?: boolean;
};

export default DropdownNavbar;
