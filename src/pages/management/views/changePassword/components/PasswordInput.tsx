import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { FormikProps } from "formik";
import { InputMargin } from "../../../../../share/constants";
import { useDarkMode } from "../../../../../context/DarkMode";

const PasswordInput = <T extends Record<string, unknown>>({
  formik,
  label,
  name,
}: PasswordInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
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
          error={Boolean(formik.touched[name] && formik.errors[name])}
          label={label}
          name={name}
          type={showPassword ? "text" : "password"}
          onChange={formik.handleChange}
          value={formik.values[name]}
          onBlur={formik.handleBlur}
          helperText={
            formik.touched[name] && formik.errors[name] ? (
              <>{formik.errors[name]}</>
            ) : null
          }
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ width: "100%", direction: "ltr" }}
        />
      </Box>
    </ThemeProvider>
  );
};

type PasswordInputProps<T> = {
  formik: FormikProps<T>;
  label: string;
  name: string;
};

export default PasswordInput;
