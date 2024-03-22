import {
  Autocomplete,
  Box,
  // CircularProgress,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { FormikProps } from "formik";
import { SyntheticEvent } from "react";
import { useDarkMode } from "../../../../../context/DarkMode";
import { InputMargin } from "../../../../../share/constants";
import { NotificationsOptions } from "../types";

const AutocompleteNotifications = <T extends Record<string, unknown>>({
  options,
  label,
  formik,
  name,
  loading,
}: AutocompleteInputType<T>) => {
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
          // freeSolo
          value={formik.values[name]}
          options={options}
          getOptionLabel={(option) => (option as NotificationsOptions).title}
          onChange={(
            _event: SyntheticEvent<Element, Event>,
            newValue: unknown | null
          ) => {
            formik.setFieldValue(name, newValue);
            formik.setFieldValue(
              "title",
              (newValue as NotificationsOptions).title
            );
            formik.setFieldValue(
              "message",
              (newValue as NotificationsOptions).message
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              name={name}
              error={Boolean(formik.touched[name] && formik.errors[name])}
              onBlur={formik.handleBlur}
              helperText={
                formik.touched[name] && formik.errors[name] ? (
                  <>{formik.errors[name]}</>
                ) : null
              }
            />
          )}
        />
      </Box>
    </ThemeProvider>
  );
};

type AutocompleteInputType<T> = {
  options: NotificationsOptions[];
  label: string;
  formik: FormikProps<T>;
  name: string;
  loading: boolean;
};

export default AutocompleteNotifications;
