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
import { WedgitWrapper } from "../style/Wedgit.style";

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
          <Stack direction={"row"} flexWrap={"wrap"}>
            <WedgitWrapper>
              <Wedgit
                icon={<AccessibilityIcon fontSize="small" />}
                title="Available Drivers"
                value={data?.data?.content?.available_drivers}
              />
            </WedgitWrapper>
            <WedgitWrapper>
              <Wedgit
                icon={<OnlinePredictionIcon fontSize="small" />}
                title="Active Orders"
                value={data?.data?.content?.active_orders}
              />
            </WedgitWrapper>
            <WedgitWrapper>
              <Wedgit
                icon={<PeopleIcon fontSize="small" />}
                title="All Drivers"
                value={data?.data?.content?.all_drivers}
              />
            </WedgitWrapper>
            <WedgitWrapper>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                height={"100%"}
              >
                <AutoAssignButton data={managementData?.data.content} />
              </Stack>
            </WedgitWrapper>
            <WedgitWrapper>
              <Wedgit
                icon={<HourglassBottomIcon fontSize="small" />}
                title="Pending Orders"
                value={data?.data?.content?.pending_orders}
              />
            </WedgitWrapper>
            <WedgitWrapper>
              <Wedgit
                icon={<MinorCrashOutlinedIcon fontSize="small" />}
                title="Arrived Odrers"
                value={data?.data?.content?.drivers_orders}
              />
            </WedgitWrapper>
            <WedgitWrapper>
              <Wedgit
                icon={<DoDisturbIcon fontSize="small" />}
                title="Canceled Orders"
                value={data?.data?.content?.canceled_orders}
              />
            </WedgitWrapper>
            <WedgitWrapper>
              <Wedgit
                icon={<AccessAlarmIcon fontSize="small" />}
                title="Scheduled Orders"
                value={data?.data?.content?.scheduled_orders}
              />
            </WedgitWrapper>
          </Stack>
        </>
      )}
      <PaperContainer>
        <Typography variant="body1" sx={{ marginBottom: "5px" }}>
          {t("bird_eye")}
        </Typography>
        <Box height={"400px"}>
          <iframe
            src={`https://maps.tareeq.app/#/admin/bird-eye?token=${token}`}
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
