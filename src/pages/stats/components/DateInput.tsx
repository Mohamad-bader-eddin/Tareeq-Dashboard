import { Box, ThemeProvider, createTheme } from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import useMedeaQueries from "../../../share/utils/useMideaQuery";
import { InputMargin } from "../../../share/constants";
import {
  DatePicker,
  DateValidationError,
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Dispatch, SetStateAction, useMemo, useState } from "react";

const DateInput = ({ date, setDate, label, disabled }: DateInputProps) => {
  const [error, setError] = useState<DateValidationError | null>(null);
  const { darkMode } = useDarkMode();
  const { tablet } = useMedeaQueries();

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleSetValue = (value: Date) => {
    setDate(value);
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
          "& input , & label": {
            fontSize: "14px",
          },
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {tablet ? (
            <DemoContainer components={["MobileDatePicker"]}>
              <MobileDatePicker
                onChange={(value) => handleSetValue(value as Date)}
                value={date}
                label={label}
                disabled={disabled}
                onError={(newError) => setError(newError)}
                slotProps={{
                  textField: {
                    error: Boolean(errorMessage),
                    helperText: errorMessage,
                    sx: { direction: "ltr" },
                  },
                }}
              />
            </DemoContainer>
          ) : (
            <DemoContainer components={["DesktopDatePicker"]}>
              <DatePicker
                onChange={(value) => handleSetValue(value as Date)}
                value={date}
                label={label}
                disabled={disabled}
                onError={(newError) => setError(newError)}
                slotProps={{
                  textField: {
                    error: Boolean(errorMessage),
                    helperText: errorMessage,
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

type DateInputProps = {
  date: Date | null;
  setDate: Dispatch<SetStateAction<Date | null>>;
  label: string;
  disabled?: boolean;
};

export default DateInput;
