import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useTranslation } from "react-i18next";

const ExportButton = ({ handleClick }: ExportButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button
      onClick={handleClick}
      endIcon={<FileDownloadIcon />}
      variant="outlined"
      size="small"
      sx={{
        mb: "20px",
        ".css-9tj150-MuiButton-endIcon": {
          marginInline: "8px -4px !important",
        },
      }}
    >
      {t("export")}
    </Button>
  );
};

type ExportButtonProps = {
  handleClick: () => void;
};

export default ExportButton;
