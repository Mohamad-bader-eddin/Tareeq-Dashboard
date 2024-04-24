import { Box, Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";
import GenericDialog from "../../../../../share/components/Dialog/GenericDialog";
import CustomInput from "../../../../../share/components/Input/CustomInput";

const AdvanceSearchDialog = ({
  handleClick,
  openDialog,
  setOpenDialog,
  handleAgree,
  name,
  setName,
  id,
  setId,
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
            <CustomInput label={t("id")} value={id} setValue={setId} />
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
            <CustomInput
              label={t("client_phone")}
              value={phone}
              setValue={setPhone}
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
  id: string;
  setId: Dispatch<SetStateAction<string>>;
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
