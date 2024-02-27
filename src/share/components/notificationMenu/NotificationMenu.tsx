import {
  // Avatar,
  Badge,
  Divider,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import DropdownNavbar from "../dropdownNavbar/DropdownNavbar";
// import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { theme } from "../../utils/theme";
import { useTranslation } from "react-i18next";
import { useNotifications } from "../../../context/Notifications";

const NotificationMenu = () => {
  const { darkMode } = useDarkMode();
  const { t } = useTranslation();
  const { notification } = useNotifications();

  return (
    <>
      <DropdownNavbar
        avatar={
          <Badge
            badgeContent={notification.length}
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
        isNotification={true}
      >
        <MenuItem>
          {t("you_have")} {notification.length} {t("new_notifications")}
        </MenuItem>
        <Divider />
        {notification?.map((element, index) => (
          <MenuItem
            key={index}
            sx={{
              "&:hover": {
                backgroundColor: darkMode
                  ? theme.dark.hover
                  : theme.light.hover,
              },
            }}
          >
            <Stack direction="row" alignItems="center">
              {/* <Avatar>
                <PersonIcon />
              </Avatar> */}
              <Stack>
                <Typography variant="h6" sx={{ m: "0 10px" }}>
                  {" "}
                  {element.body}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: darkMode ? theme.dark.text : theme.light.text,
                    m: "0 10px",
                  }}
                >
                  {element.title}
                </Typography>
              </Stack>
            </Stack>
          </MenuItem>
        ))}
      </DropdownNavbar>
    </>
  );
};

export default NotificationMenu;
