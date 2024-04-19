import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Dispatch, SetStateAction, forwardRef } from "react";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const GenericAlert = ({
  open,
  setOpen,
  type,
  msg,
  inRow,
}: GenericAlertProps) => {
  //   const handleClose = (
  //     _event?: React.SyntheticEvent | Event,
  //     reason?: string
  //   ) => {
  //     // if (reason === "clickaway") {
  //     //   return;
  //     // }

  //     setOpen(false);
  //   };
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
      sx={inRow ? { bottom: "auto !important" } : {}}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity={type}
        sx={{ width: "100%" }}
      >
        {msg}
      </Alert>
    </Snackbar>
  );
};

type GenericAlertProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  type: "success" | "error" | "warning";
  msg: string;
  inRow?: boolean;
};

export default GenericAlert;
