import { Avatar, Box, MenuItem, Typography } from "@mui/material";
import jsCookie from "js-cookie";
import "flag-icon-css/css/flag-icons.min.css";
import { languages } from "../../../languages/languages";
import i18next from "i18next";
import { theme } from "../../utils/theme";
import { useDarkMode } from "../../../context/DarkMode";
import DropdownNavbar from "../dropdownNavbar/DropdownNavbar";

const LangugesMenu = () => {
  const languageCode = jsCookie.get("i18next");
  const { darkMode } = useDarkMode();

  return (
    <>
      <DropdownNavbar
        avatar={
          <Avatar sx={{ width: 32, height: 32 }}>
            <Box
              component={"span"}
              className={`flag-icon flag-icon-${
                languageCode === "en" ? "gb" : "sy"
              }`}
              sx={{
                width: "100%",
                height: "100%",
                backgroundSize: "135%",
              }}
            ></Box>
          </Avatar>
        }
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.country_code}
            onClick={() => i18next.changeLanguage(lang.code)}
            sx={{
              "&:hover": {
                backgroundColor: darkMode
                  ? theme.dark.hover
                  : theme.light.hover,
              },
            }}
          >
            <span className={`flag-icon flag-icon-${lang.country_code}`}></span>
            <Typography variant="h6" sx={{ m: "0 10px" }}>
              {lang.name}
            </Typography>
          </MenuItem>
        ))}
      </DropdownNavbar>
    </>
  );
};

export default LangugesMenu;
