import { Paper } from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import { theme } from "../../utils/theme";

const PaperContainer = ({ children }: PaperContainerProps) => {
  const { darkMode } = useDarkMode();
  return (
    <Paper
      elevation={3}
      sx={{
        color: darkMode ? theme.dark.text : theme.light.text,
        backgroundColor: darkMode ? theme.dark.sidebar : theme.light.sidebar,
        margin: "20px",
        padding: "10px",
        boxShadow: darkMode
          ? "0px 3px 3px -2px rgba(255,255,255,0.2), 0px 3px 4px 0px rgba(255,255,255,0.14), 0px 1px 8px 0px rgba(255,255,255,0.12)"
          : "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
      }}
    >
      {children}
    </Paper>
  );
};

type PaperContainerProps = {
  children: React.ReactNode;
};

export default PaperContainer;
