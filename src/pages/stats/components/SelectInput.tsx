import { Dispatch, SetStateAction } from "react";
import { useDarkMode } from "../../../context/DarkMode";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { InputMargin } from "../../../share/constants";

const SelectInput = ({
  label,
  options,
  selectValue,
  setSelectValue,
}: SelectInputProps) => {
  const { darkMode } = useDarkMode();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ mb: InputMargin }}>
        <FormControl fullWidth>
          <InputLabel sx={{ fontSize: "14px" }}>{label}</InputLabel>
          <Select
            label={label}
            value={selectValue}
            onChange={handleChange}
            sx={{ fontSize: "14px" }}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};

type SelectInputProps = {
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
  label: string;
  options: {
    value: string;
    key: string;
  }[];
};

export default SelectInput;
