import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useTranslation } from "react-i18next";
import GenericDialog from "../Dialog/GenericDialog";
import { Dispatch, SetStateAction } from "react";
import DateExport from "./DateExport";

const ExportButton = ({
  handleClick,
  from,
  handleAgree,
  openDialog,
  setFrom,
  setOpenDialog,
  setTo,
  to,
  agreeLoading,
}: ExportButtonProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<FileDownloadIcon />}
        variant="outlined"
        size="small"
        sx={{
          fontSize: "12px",
          mb: "20px",
          ".css-9tj150-MuiButton-endIcon": {
            marginInline: "8px -4px !important",
          },
        }}
      >
        {t("export")}
      </Button>
      <GenericDialog
        open={openDialog}
        setOpen={setOpenDialog}
        handleAgree={handleAgree}
        title={t("export")}
        agreeLoading={agreeLoading}
        elementContent={
          <>
            <DateExport value={from} setValue={setFrom} label={t("from")} />
            <DateExport value={to} setValue={setTo} label={t("to")} />
          </>
        }
      />
    </>
  );
};

type ExportButtonProps = {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  from: Date | null;
  setFrom: Dispatch<SetStateAction<Date | null>>;
  to: Date | null;
  setTo: Dispatch<SetStateAction<Date | null>>;
  handleAgree: () => void;
  handleClick: () => void;
  agreeLoading: boolean;
};

export default ExportButton;
