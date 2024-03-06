import { Backdrop, Box, Button } from "@mui/material";
// import AdjustSharpIcon from "@mui/icons-material/AdjustSharp";
import FiberManualRecordSharpIcon from "@mui/icons-material/FiberManualRecordSharp";
// import MopedSharpIcon from "@mui/icons-material/MopedSharp";
// import HideSourceSharpIcon from "@mui/icons-material/HideSourceSharp";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Icon } from "../style/OrdersHead.Style";
// import { useDarkMode } from "../../../context/DarkMode";
import { useEffect, useState } from "react";
// import useMedeaQueries from "../../../share/utils/useMideaQuery";
import { useTranslation } from "react-i18next";
import { Management } from "../../management/types";
import useUpdateManagementQuery from "../../management/hooks/useUpdateManagementQuery";
import GenericAlert from "../../../share/components/alert/GenericAlert";
import { getErrorMessage } from "../../../share/utils/getErrorMessage";
import Spinner from "../../../share/components/Spinner";

const OrdersHead = ({ data }: { data: Management[] }) => {
  // const { darkMode } = useDarkMode();
  // const { laptop, laptopL } = useMedeaQueries();
  const [openError, setOpenError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openSucsses, setOpenSucsses] = useState(false);
  const [msg, setMsg] = useState("");
  const { mutate, isLoading } = useUpdateManagementQuery();
  const [click, setClick] = useState(true);
  const { t } = useTranslation();
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
    <Box>
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <Spinner />
        </Backdrop>
      ) : null}
      <Button
        variant="outlined"
        color={click ? "success" : "error"}
        endIcon={<FiberManualRecordSharpIcon />}
        onClick={handleClick}
        size="small"
        sx={{
          mb: "20px",
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
    </Box>
    // <Stack
    //   direction={laptop ? "column" : "row"}
    //   alignItems={laptop ? "flex-start" : "center"}
    //   justifyContent={"space-between"}
    //   sx={{ marginBlockEnd: "20px" }}
    // >
    //   <Box>
    //     <Stack direction={"row"} alignItems={"center"} spacing={2}>
    //       <Tooltip
    //         title={t("online_shopper")}
    //         style={{ marginInlineEnd: "15px" }}
    //       >
    //         <Icon $darkMode={darkMode}>
    //           <AdjustSharpIcon fontSize="medium" color="success" />
    //           <Typography variant="h6" style={{ marginInlineStart: "10px" }}>
    //             3
    //           </Typography>
    //         </Icon>
    //       </Tooltip>
    //       <Tooltip
    //         title={t("accepted_an_route_orders")}
    //         style={{ marginInlineEnd: "15px" }}
    //       >
    //         <Icon $darkMode={darkMode}>
    //           <MopedSharpIcon fontSize="medium" color="info" />
    //           <Typography variant="h6" style={{ marginInlineStart: "10px" }}>
    //             4
    //           </Typography>
    //         </Icon>
    //       </Tooltip>
    //       <Tooltip title={t("offline_shppers")}>
    //         <Icon $darkMode={darkMode}>
    //           <HideSourceSharpIcon fontSize="medium" color="error" />
    //           <Typography variant="h6" style={{ marginInlineStart: "10px" }}>
    //             5
    //           </Typography>
    //         </Icon>
    //       </Tooltip>
    //     </Stack>
    //   </Box>
    //   <Box sx={{ marginTop: laptop ? "15px" : 0 }}>
    //     {type === "active" ? (
    //       <Stack
    //         direction={laptopL ? "column" : "row"}
    //         alignItems={laptopL ? "flex-start" : "center"}
    //         spacing={laptopL ? 2 : 0}
    //       >
    //         <Button
    //           variant="outlined"
    //           color="error"
    //           endIcon={<DeleteIcon />}
    //           sx={{
    //             marginInlineEnd: "15px",
    //             ".css-9tj150-MuiButton-endIcon": {
    //               marginInline: "8px -4px !important",
    //             },
    //           }}
    //         >
    //           {t("delete_addresses")}
    //         </Button>
    //         <Button
    //           variant="outlined"
    //           color={click ? "success" : "error"}
    //           endIcon={<FiberManualRecordSharpIcon />}
    //           onClick={() => setClick((prev) => !prev)}
    //           sx={{
    //             ".css-9tj150-MuiButton-endIcon": {
    //               marginInline: "8px -4px !important",
    //             },
    //           }}
    //         >
    //           {t("auto_assign_is")} {click ? t("on") : t("off")}
    //         </Button>
    //       </Stack>
    //     ) : (
    //       <Button
    //         variant="outlined"
    //         color={click ? "success" : "error"}
    //         endIcon={<FiberManualRecordSharpIcon />}
    //         onClick={() => setClick((prev) => !prev)}
    //         sx={{
    //           ".css-9tj150-MuiButton-endIcon": {
    //             marginInline: "8px -4px !important",
    //           },
    //         }}
    //       >
    //         {t("auto_assign_is")} {click ? t("on") : t("off")}
    //       </Button>
    //     )}
    //   </Box>
    // </Stack>
  );
};

// type OrdersHeadProps = {
//   type?: "active" | "pending" | "arrived" | "canceled" | "schedule";
// };

export default OrdersHead;
