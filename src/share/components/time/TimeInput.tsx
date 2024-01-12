import { Box, ThemeProvider, createTheme } from "@mui/material";
import { FormikProps } from "formik";
import useMedeaQueries from "../../utils/useMideaQuery";
import { useDarkMode } from "../../../context/DarkMode";
import {
  LocalizationProvider,
  MobileTimePicker,
  TimePicker,
  TimeValidationError,
} from "@mui/x-date-pickers";
import { useMemo, useState } from "react";
import { InputMargin } from "../../constants";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const TimeInput = <T extends Record<string, unknown>>({
  formik,
  label,
  name,
}: TimeInputType<T>) => {
  const [error, setError] = useState<TimeValidationError | null>(null);
  const { darkMode } = useDarkMode();
  const { tablet } = useMedeaQueries();

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleSetValue = (value: Date | null) => {
    const time = value?.toLocaleTimeString("en-uk", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h11",
    });
    console.log(time);

    formik.setFieldValue(name, value);
  };

  const errorMessage = useMemo(() => {
    switch (error) {
      case "maxTime":
      case "minTime":
      case "invalidDate": {
        return "Your Time is not valid";
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
              <MobileTimePicker
                onChange={(value) => handleSetValue(value as Date)}
                value={formik.values[name]}
                label={label}
                onError={(newError) => setError(newError)}
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
              <TimePicker
                onChange={(value) => handleSetValue(value as Date)}
                value={formik.values[name]}
                label={label}
                onError={(newError) => setError(newError)}
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
                }}
              />
            </DemoContainer>
          )}
        </LocalizationProvider>
      </Box>
    </ThemeProvider>
  );
};

type TimeInputType<T> = {
  formik: FormikProps<T>;
  label: string;
  name: string;
};

export default TimeInput;
