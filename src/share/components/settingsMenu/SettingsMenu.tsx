import { Avatar, ListItemIcon, MenuItem } from "@mui/material";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import DropdownNavbar from "../dropdownNavbar/DropdownNavbar";
import { theme } from "../../utils/theme";
import { useDarkMode } from "../../../context/DarkMode";
import { useTranslation } from "react-i18next";
import jsCookie from "js-cookie";
import { useNavigate } from "react-router-dom";

const SettingsMenu = () => {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const logout = () => {
    jsCookie.remove("accessToken");
    jsCookie.remove("user");
    navigate("/login", { replace: true });
  };
  return (
    <>
      <DropdownNavbar avatar={<Avatar />}>
        {/* <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: darkMode ? theme.dark.hover : theme.light.hover,
            },
          }}
        >
          <Avatar
            sx={{
              marginInline: "-4px 8px !important",
            }}
          />{" "}
          {t("profile")}
        </MenuItem> */}
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: darkMode ? theme.dark.hover : theme.light.hover,
            },
          }}
        >
          <ListItemIcon
            sx={
              darkMode
                ? { color: theme.dark.text }
                : { color: theme.light.text }
            }
          >
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          {t("add_another_account")}
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: darkMode ? theme.dark.hover : theme.light.hover,
            },
          }}
        >
          <ListItemIcon
            sx={
              darkMode
                ? { color: theme.dark.text }
                : { color: theme.light.text }
            }
          >
            <Settings fontSize="small" />
          </ListItemIcon>
          {t("settings")}
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: darkMode ? theme.dark.hover : theme.light.hover,
            },
          }}
          onClick={logout}
        >
          <ListItemIcon
            sx={
              darkMode
                ? { color: theme.dark.text }
                : { color: theme.light.text }
            }
          >
            <Logout fontSize="small" />
          </ListItemIcon>
          {t("logout")}
        </MenuItem>
      </DropdownNavbar>
    </>
  );
};

export default SettingsMenu;
