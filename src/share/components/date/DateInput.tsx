import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  DatePicker,
  DateValidationError,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { ThemeProvider, createTheme, Box } from "@mui/material";
import { useState, useMemo } from "react";
import { useDarkMode } from "../../../context/DarkMode";
import useMedeaQueries from "../../utils/useMideaQuery";
import { FormikProps } from "formik";
import { InputMargin } from "../../constants";

const DateInput = <T extends Record<string, unknown>>({
  formik,
  label,
  name,
  disabled,
}: DateInputProps<T>) => {
  const [error, setError] = useState<DateValidationError | null>(null);
  const { darkMode } = useDarkMode();
  const { tablet } = useMedeaQueries();

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleSetValue = (value: Date | null) => {
    value?.setHours(new Date().getHours());
    value?.setMinutes(new Date().getMinutes());
    value?.setSeconds(new Date().getSeconds());
    formik.setFieldValue(name, value);
  };

  const errorMessage = useMemo(() => {
    switch (error) {
      case "maxDate":
      case "minDate":
      case "invalidDate": {
        return "Your date is not valid";
      }
      default: {
        return "";
      }
    }
  }, [error]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          mb: InputMargin,
          width: "100%",
          "&>div>div": {
            width: "100%",
          },
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {tablet ? (
            <DemoContainer components={["MobileDatePicker"]}>
              <MobileDatePicker
                onChange={(value) => handleSetValue(value as Date)}
                value={formik.values[name]}
                label={label}
                onError={(newError) => setError(newError)}
                disabled={disabled}
                slotProps={{
                  textField: {
                    error:
                      Boolean(formik.touched[name] && formik.errors[name]) ||
                      Boolean(errorMessage),
                    helperText:
                      formik.touched[name] && formik.errors[name] ? (
                        <>{formik.errors[name]}</>
                      ) : (
                        errorMessage
                      ),
                  },
                }}
              />
            </DemoContainer>
          ) : (
            <DemoContainer components={["DesktopDatePicker"]}>
              <DatePicker
                onChange={(value) => handleSetValue(value as Date)}
                value={formik.values[name]}
                label={label}
                onError={(newError) => setError(newError)}
                disabled={disabled}
                slotProps={{
                  textField: {
                    error:
                      Boolean(formik.touched[name] && formik.errors[name]) ||
                      Boolean(errorMessage),
                    helperText:
                      formik.touched[name] && formik.errors[name] ? (
                        <>{formik.errors[name]}</>
                      ) : (
                        errorMessage
                      ),
                    sx: { direction: "ltr" },
                  },
                  field: {
                    readOnly: true,
                  },
                }}
              />
            </DemoContainer>
          )}
        </LocalizationProvider>
      </Box>
    </ThemeProvider>
  );
};

type DateInputProps<T> = {
  formik: FormikProps<T>;
  label: string;
  name: string;
  disabled?: boolean;
};

export default DateInput;
