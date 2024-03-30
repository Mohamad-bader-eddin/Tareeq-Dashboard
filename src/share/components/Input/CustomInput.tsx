import { Box, TextField, ThemeProvider, createTheme } from "@mui/material";
import { InputMargin } from "../../constants";
import { useDarkMode } from "../../../context/DarkMode";
import { Dispatch, SetStateAction } from "react";

const CustomInput = ({ label, type, value, setValue }: InputProps) => {
  const { darkMode } = useDarkMode();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ mb: InputMargin }}>
        <TextField
          label={label}
          type={type ? type : "text"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          variant="outlined"
          sx={{ width: "100%" }}
        />
      </Box>
    </ThemeProvider>
  );
};

type InputProps = {
  label: string;
  type?: "text" | "email" | "number";
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default CustomInput;
