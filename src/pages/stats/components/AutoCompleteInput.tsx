import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { useDarkMode } from "../../../context/DarkMode";
import {
  Autocomplete,
  Box,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { InputMargin } from "../../../share/constants";
import { Option } from "../../../share/types";

const AutoCompleteInput = ({
  label,
  options,
  selectValue,
  setSelectValue,
  loading,
}: AutoCompleteInputProps) => {
  const { darkMode } = useDarkMode();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ mb: InputMargin }}>
        <Autocomplete
          loading={loading}
          value={selectValue}
          options={options}
          getOptionLabel={(option) => (option as Option).name}
          onChange={(
            _event: SyntheticEvent<Element, Event>,
            newValue: Option | null
          ) => {
            setSelectValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              sx={{
                "& input , & label": {
                  fontSize: "14px",
                },
              }}
            />
          )}
        />
      </Box>
    </ThemeProvider>
  );
};

type AutoCompleteInputProps = {
  selectValue: Option | null;
  setSelectValue: Dispatch<SetStateAction<Option | null>>;
  label: string;
  loading: boolean;
  options: Option[];
};

export default AutoCompleteInput;
