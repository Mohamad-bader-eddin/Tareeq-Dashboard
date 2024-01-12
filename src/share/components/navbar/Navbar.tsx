import { Dispatch, SetStateAction, useEffect } from "react";
import { Content, Nav } from "./Navbar.style";
import { IconButton, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDarkMode } from "../../../context/DarkMode";
import useMedeaQueries from "../../utils/useMideaQuery";
import { theme } from "../../utils/theme";
import LangugesMenu from "../langugesMenu/LangugesMenu";
import NotificationMenu from "../notificationMenu/NotificationMenu";
import SettingsMenu from "../settingsMenu/SettingsMenu";

const Navbar = ({ openSidebar, setOpenSidebar }: NavbarProps) => {
  const { darkMode, setDarkMode } = useDarkMode();
  const { tablet } = useMedeaQueries();
  const handleMode = () => {
    setDarkMode((prev) => !prev);
  };
  useEffect(() => {
    if (tablet) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  }, [setOpenSidebar, tablet]);
  useEffect(() => {
    document.body.style.backgroundColor = darkMode
      ? theme.dark.background
      : theme.light.background;
  }, [darkMode]);
  return (
    <>
      <Nav $openSidebar={openSidebar} $darkMode={darkMode}>
        <Content>
          <IconButton
            aria-label="dashboard"
            sx={{ color: darkMode ? theme.dark.text : theme.light.text }}
            size="large"
            onClick={() => setOpenSidebar((prev) => !prev)}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            className="links"
          >
            <LangugesMenu />
            {/* <ProfileDropdown /> */}
            <IconButton
              sx={{
                color: darkMode ? theme.dark.text : theme.light.text,
                marginInlineEnd: "10px",
                width: "40px",
                height: "40px",
              }}
              onClick={handleMode}
            >
              {darkMode ? (
                <LightModeIcon color="inherit" />
              ) : (
                <DarkModeIcon color="inherit" />
              )}
            </IconButton>
            <NotificationMenu />
            <SettingsMenu />
            {/* <NotificationDropdown />
          <LanguageDropdown /> */}
          </Stack>
        </Content>
      </Nav>
    </>
  );
};

export type NavbarProps = {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

export default Navbar;
