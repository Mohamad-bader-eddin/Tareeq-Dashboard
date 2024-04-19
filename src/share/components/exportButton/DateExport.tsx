import { Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Dispatch, SetStateAction } from "react";
import { InputMargin } from "../../constants";

const DateExport = ({ value, setValue, label }: DateExportProps) => {
  const handleSetValue = (value: Date | null) => {
    value?.setHours(new Date().getHours());
    value?.setMinutes(new Date().getMinutes());
    value?.setSeconds(new Date().getSeconds());
    setValue(value);
  };
  return (
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
        <DemoContainer components={["MobileDatePicker"]}>
          <DatePicker
            onChange={(value) => handleSetValue(value as Date)}
            value={value}
            label={label}
            slotProps={{
              field: { clearable: true, onClear: () => {}, readOnly: true },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};

type DateExportProps = {
  value: Date | null;
  setValue: Dispatch<SetStateAction<Date | null>>;
  label: string;
};

export default DateExport;
