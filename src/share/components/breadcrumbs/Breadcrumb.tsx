import {
  Breadcrumbs,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../../context/DarkMode";
import { theme } from "../../utils/theme";

const Breadcrumb = ({ tracks, current }: BreadcrumbProps) => {
  const { darkMode } = useDarkMode();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ m: "10px 20px" }}>
        {tracks.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={{ color: darkMode ? theme.dark.main : theme.light.main }}
          >
            {item.name}
          </Link>
        ))}
        <Typography>{current}</Typography>
      </Breadcrumbs>
    </ThemeProvider>
  );
};

type track = {
  path: string;
  name: string;
};

type BreadcrumbProps = {
  tracks: track[];
  current: string;
};

export default Breadcrumb;
