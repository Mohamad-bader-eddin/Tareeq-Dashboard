import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import { FormikProps } from "formik";
import { InputMargin } from "../../constants";

const SelectInput = <T extends Record<string, unknown>>({
  formik,
  label,
  name,
  options,
}: SelectInputProps<T>) => {
  const { darkMode } = useDarkMode();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ mb: InputMargin }}>
        <FormControl
          fullWidth
          error={Boolean(formik.touched[name] && formik.errors[name])}
        >
          <InputLabel sx={{ fontSize: "14px" }}>{label}</InputLabel>
          <Select
            name={name}
            label={label}
            value={formik.values[name]}
            onChange={formik.handleChange}
            error={Boolean(formik.touched[name] && formik.errors[name])}
            onBlur={formik.handleBlur}
            sx={{ fontSize: "14px" }}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.key}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {formik.touched[name] && formik.errors[name]
              ? formik.errors[name]?.toString()
              : ""}
          </FormHelperText>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};

type SelectInputProps<T> = {
  formik: FormikProps<T>;
  label: string;
  name: string;
  options: {
    value: string;
    key: string;
  }[];
};

export default SelectInput;
