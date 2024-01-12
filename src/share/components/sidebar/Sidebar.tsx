import { Box, CardMedia, IconButton, Stack } from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import { Links, SideBar } from "./Sidebar.style";
import { SidebarData } from "./SidebarData";
import SidebarLink from "./SidebarLink";
import { SIDEBAR_CLOSE_WIDTH, SIDEBAR_OPEN_WIDTH } from "../../constants";
import { useState } from "react";
import useMedeaQueries from "../../utils/useMideaQuery";
import { theme } from "../../utils/theme";
import { NavbarProps } from "../navbar/Navbar";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({ openSidebar, setOpenSidebar }: NavbarProps) => {
  const [hoverOnCloseSidebar, setHoverOnCloseSidebar] = useState(false);
  const { darkMode } = useDarkMode();
  const { tablet } = useMedeaQueries();

  const handleOnMouseEnter = () => {
    // setTimeout(() => {
    setHoverOnCloseSidebar(true);
    // }, 10);
  };
  const handleOnMouseLeave = () => {
    setHoverOnCloseSidebar(false);
  };

  return (
    <>
      <SideBar
        $openSidebar={openSidebar}
        $darkMode={darkMode}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        {openSidebar ||
        (!openSidebar && hoverOnCloseSidebar) ||
        (openSidebar && tablet) ? (
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box sx={{ width: "120px", height: "44px" }}>
              <CardMedia
                image="/images/logo.png"
                component={"img"}
                sx={{
                  height: " 100%",
                  width: "100%",
                }}
              />
            </Box>
            <IconButton
              aria-label="dashboard"
              sx={{
                color: darkMode ? theme.dark.text : theme.light.text,
                display: tablet ? "block" : "none",
              }}
              size="large"
              onClick={() => setOpenSidebar(false)}
            >
              <CloseIcon color="inherit" />
            </IconButton>
          </Stack>
        ) : !tablet ? (
          <Box sx={{ width: "40px", height: "44px" }}>
            <CardMedia
              image="/images/icon.png"
              component={"img"}
              sx={{
                height: " 100%",
                width: "100%",
              }}
            />
          </Box>
        ) : null}
        <Links>
          {SidebarData.map((data, index) => (
            <SidebarLink
              key={index}
              openSidebar={openSidebar}
              hoverOnCloseSidebar={hoverOnCloseSidebar}
              path={data.path}
              title={data.title}
              icon={data.icon}
              subNav={data.subNav}
            />
          ))}
        </Links>
      </SideBar>
      <Box
        sx={{
          width:
            openSidebar && !tablet
              ? SIDEBAR_OPEN_WIDTH
              : !tablet
              ? SIDEBAR_CLOSE_WIDTH
              : 0,
          transition: "1s",
        }}
      />
    </>
  );
};

export default Sidebar;
