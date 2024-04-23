import { Box, Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import GenericDialog from "../../../share/components/Dialog/GenericDialog";
import DateExport from "../../../share/components/exportButton/DateExport";
import CustomInput from "../../../share/components/Input/CustomInput";

const AdvanceSearchDialog = ({
  handleClick,
  openDialog,
  setOpenDialog,
  handleAgree,
  from,
  to,
  setFrom,
  setTo,
  name,
  setName,
  orderNumber,
  setOrderNumber,
  phone,
  setPhone,
  lastName,
  setLastName,
}: AdvanceSearchDialogProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<SearchIcon />}
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
        {t("advance_search")}
      </Button>
      <GenericDialog
        open={openDialog}
        setOpen={setOpenDialog}
        handleAgree={handleAgree}
        title={t("advance_search")}
        elementContent={
          <Box sx={{ marginTop: "10px" }}>
            <CustomInput
              label={t("order_no")}
              value={orderNumber}
              setValue={setOrderNumber}
            />
            <DateExport
              value={from}
              setValue={setFrom}
              label={t("from_date")}
            />
            <DateExport value={to} setValue={setTo} label={t("to_date")} />
            <CustomInput
              label={t("client_phone")}
              value={phone}
              setValue={setPhone}
            />
            <CustomInput
              label={t("client_name")}
              value={name}
              setValue={setName}
            />
            <CustomInput
              label={t("client_last_name")}
              value={lastName}
              setValue={setLastName}
            />
          </Box>
        }
      />
    </>
  );
};

type AdvanceSearchDialogProps = {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  from: Date | null;
  setFrom: Dispatch<SetStateAction<Date | null>>;
  to: Date | null;
  setTo: Dispatch<SetStateAction<Date | null>>;
  orderNumber: string;
  setOrderNumber: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  handleAgree: () => void;
  handleClick: () => void;
};

export default AdvanceSearchDialog;
