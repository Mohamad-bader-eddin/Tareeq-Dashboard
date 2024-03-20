import { Backdrop, Box, Stack, Typography } from "@mui/material";
import Layout from "../../../share/components/layout/Layout";
import PeopleIcon from "@mui/icons-material/People";
import MinorCrashOutlinedIcon from "@mui/icons-material/MinorCrashOutlined";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Wedgit from "../components/Wedgit";
import useHomeQuery from "../hooks/useHomeQuery";
import Spinner from "../../../share/components/Spinner";
import PaperContainer from "../../../share/components/Paper/PaperContainer";
import { useTranslation } from "react-i18next";
import jsCookie from "js-cookie";
import useManagementQuery from "../../management/hooks/useManagementQuery";
import AutoAssignButton from "../components/AutoAssignButton";

const HomeContainer = () => {
  const { data, isLoading } = useHomeQuery();
  const { t } = useTranslation();
  const token = jsCookie.get("accessToken");
  const { data: managementData, isLoading: managementLoading } =
    useManagementQuery();
  return (
    <Layout>
      {isLoading || managementLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <Spinner />
        </Backdrop>
      ) : (
        <>
          <AutoAssignButton data={managementData?.data.content} />
          <Stack direction={"row"} flexWrap={"wrap"}>
            <Box sx={{ flex: 1, minWidth: "300px" }}>
              <Wedgit
                icon={<AccessibilityIcon fontSize="large" />}
                title="Available Drivers"
                value={data?.data?.content?.available_drivers}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: "300px" }}>
              <Wedgit
                icon={<MinorCrashOutlinedIcon fontSize="large" />}
                title="Drivers who have orders"
                value={data?.data?.content?.drivers_orders}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: "300px" }}>
              <Wedgit
                icon={<PeopleIcon fontSize="large" />}
                title="All Driver"
                value={data?.data?.content?.all_drivers}
              />
            </Box>
          </Stack>
          <Stack direction={"row"} flexWrap={"wrap"}>
            <Box sx={{ flex: 1, minWidth: "230px" }}>
              <Wedgit
                icon={<HourglassBottomIcon fontSize="large" />}
                title="Pending Orders"
                value={data?.data?.content?.pending_orders}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: "230px" }}>
              <Wedgit
                icon={<OnlinePredictionIcon fontSize="large" />}
                title="Active Orders"
                value={data?.data?.content?.active_orders}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: "230px" }}>
              <Wedgit
                icon={<DoDisturbIcon fontSize="large" />}
                title="Canceled Orders"
                value={data?.data?.content?.canceled_orders}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: "230px" }}>
              <Wedgit
                icon={<AccessAlarmIcon fontSize="large" />}
                title="Scheduled Orders"
                value={data?.data?.content?.scheduled_orders}
              />
            </Box>
          </Stack>
        </>
      )}
      <PaperContainer>
        <Typography variant="h6" sx={{ marginBottom: "15px" }}>
          {t("bird_eye")}
        </Typography>
        <Box height={"400px"}>
          <iframe
            src={`https://tareeq-map.netlify.app/#/admin/bird-eye?token=${token}`}
            title="Iframe Title"
            width={"100%"}
            height={"400px"}
            style={{ border: "0", background: "transparent" }}
          />
        </Box>
      </PaperContainer>
    </Layout>
  );
};

export default HomeContainer;
