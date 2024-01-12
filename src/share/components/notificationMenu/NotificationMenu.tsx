import {
  Avatar,
  Badge,
  Divider,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import DropdownNavbar from "../dropdownNavbar/DropdownNavbar";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { theme } from "../../utils/theme";
import { useTranslation } from "react-i18next";

const NotificationMenu = () => {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <>
      <DropdownNavbar
        avatar={
          <Badge
            badgeContent={4}
            color="error"
            sx={
              darkMode
                ? { color: theme.dark.text }
                : { color: theme.light.text }
            }
          >
            <NotificationsIcon />
          </Badge>
        }
      >
        <MenuItem>
          {t("you_have")} 3 {t("new_notifications")}
        </MenuItem>
        <Divider />
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: darkMode ? theme.dark.hover : theme.light.hover,
            },
          }}
        >
          <Stack direction="row" alignItems="center">
            <Avatar>
              <PersonIcon />
            </Avatar>
            <Stack>
              <Typography variant="h6" sx={{ m: "0 10px" }}>
                {" "}
                Lorem_ipsum_dolor
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: darkMode ? theme.dark.text : theme.light.text,
                  m: "0 10px",
                }}
              >
                1 hour ago
              </Typography>
            </Stack>
          </Stack>
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: darkMode ? theme.dark.hover : theme.light.hover,
            },
          }}
        >
          <Stack direction="row" alignItems="center">
            <Avatar>
              <PersonIcon />
            </Avatar>
            <Stack>
              <Typography variant="h6" sx={{ m: "0 10px" }}>
                {" "}
                Lorem_ipsum_dolor
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: darkMode ? theme.dark.text : theme.light.text,
                  m: "0 10px",
                }}
              >
                2 hours ago
              </Typography>
            </Stack>
          </Stack>
        </MenuItem>
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: darkMode ? theme.dark.hover : theme.light.hover,
            },
          }}
        >
          <Stack direction="row" alignItems="center">
            <Avatar>
              <PersonIcon />
            </Avatar>
            <Stack>
              <Typography variant="h6" sx={{ m: "0 10px" }}>
                {" "}
                Lorem_ipsum_dolor
              </Typography>
              <Typography
                variant="body1"
                color="GrayText"
                sx={{
                  color: darkMode ? theme.dark.text : theme.light.text,
                  m: "0 10px",
                }}
              >
                3 hours ago
              </Typography>
            </Stack>
          </Stack>
        </MenuItem>
      </DropdownNavbar>
    </>
  );
};

export default NotificationMenu;
