import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import { Dispatch, SetStateAction, forwardRef } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { useTranslation } from "react-i18next";
import useMedeaQueries from "../../utils/useMideaQuery";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.JSX.Element;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const GenericDialog = ({
  open,
  setOpen,
  title,
  elementContent,
  fullScreen,
  deleteType,
  hideAgreeBtn,
  handleAgree,
  agreeLoading,
}: GenericDialogProps) => {
  const { darkMode } = useDarkMode();
  const { laptop } = useMedeaQueries();
  const { t } = useTranslation();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullScreen={fullScreen}
        sx={{
          "& > div > div": {
            width: laptop ? "100%" : "60%",
            maxWidth: "unset",
          },
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {typeof elementContent === "string" ? (
            <DialogContentText>{elementContent}</DialogContentText>
          ) : (
            elementContent
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              marginInlineEnd: "8px",
              backgroundColor: "gray",
              color: "white",
              "&:hover": {
                backgroundColor: "darkslategrey",
              },
            }}
            // color="info"
          >
            {t("cancel")}
          </Button>
          {hideAgreeBtn ? null : (
            <Button
              disabled={agreeLoading}
              onClick={handleAgree}
              variant="contained"
              color={deleteType ? "error" : "info"}
            >
              {t("agree")}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

type GenericDialogProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleAgree: () => void;
  title?: string;
  elementContent: JSX.Element | string;
  fullScreen?: boolean;
  deleteType?: boolean;
  assignTo?: boolean;
  hideAgreeBtn?: boolean;
  agreeLoading?: boolean;
};

export default GenericDialog;
