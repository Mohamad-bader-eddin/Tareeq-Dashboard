import { Button } from "@mui/material";
import GenericAlert from "../../../share/components/alert/GenericAlert";
import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Management } from "../../management/types";
import useUpdateManagementQuery from "../../management/hooks/useUpdateManagementQuery";
import { getErrorMessage } from "../../../share/utils/getErrorMessage";

const AutoAssignButton = ({ data }: { data: Management[] }) => {
  const { t } = useTranslation();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate } = useUpdateManagementQuery();
  const [click, setClick] = useState(true);
  const autoAssign = data?.find((el) => el.key === "auto_assign_enabeled");
  const handleClick = () => {
    mutate(
      {
        key: "auto_assign_enabeled",
        value: autoAssign?.value === "true" ? "false" : "true",
      },
      {
        onSuccess: (response) => {
          setOpenSucsses(true);
          setClick((prev) => !prev);
          setMsg(response.data.message);
        },
        onError: (error) => {
          setOpenError(true);
          setErrorMsg(getErrorMessage(error));
        },
      }
    );
  };
  useEffect(() => {
    if (autoAssign?.value === "true") {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [autoAssign?.value]);
  return (
    <>
      <Button
        variant="outlined"
        color={click ? "success" : "error"}
        endIcon={<FiberManualRecordSharpIcon />}
        onClick={handleClick}
        size="small"
        sx={{
          marginInlineStart: "20px",
          ".css-9tj150-MuiButton-endIcon": {
            marginInline: "8px -4px !important",
          },
        }}
      >
        {t("auto_assign_is")} {click ? t("on") : t("off")}
      </Button>
      <GenericAlert
        open={openSucsses}
        setOpen={setOpenSucsses}
        type="success"
        msg={msg}
      />
      <GenericAlert
        open={openError}
        setOpen={setOpenError}
        type="error"
        msg={errorMsg}
      />
    </>
  );
};

export default AutoAssignButton;
