import { Box, Stack } from "@mui/material";
import Layout from "../../../share/components/layout/Layout";
import PeopleIcon from "@mui/icons-material/People";
import MinorCrashOutlinedIcon from "@mui/icons-material/MinorCrashOutlined";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Wedgit from "../components/Wedgit";

const HomeContainer = () => {
  return (
    <Layout>
      <Stack direction={"row"} flexWrap={"wrap"}>
        <Box sx={{ flex: 1 }}>
          <Wedgit
            icon={<AccessibilityIcon fontSize="large" />}
            title="Available Drivers"
            value={12}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Wedgit
            icon={<MinorCrashOutlinedIcon fontSize="large" />}
            title="Drivers who have orders"
            value={10}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Wedgit
            icon={<PeopleIcon fontSize="large" />}
            title="All Driver"
            value={15}
          />
        </Box>
      </Stack>
      <Stack direction={"row"} flexWrap={"wrap"}>
        <Box sx={{ flex: 1 }}>
          <Wedgit
            icon={<HourglassBottomIcon fontSize="large" />}
            title="Pending Orders"
            value={20}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Wedgit
            icon={<OnlinePredictionIcon fontSize="large" />}
            title="Active Orders"
            value={50}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Wedgit
            icon={<DoDisturbIcon fontSize="large" />}
            title="Canceled Orders"
            value={8}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Wedgit
            icon={<AccessAlarmIcon fontSize="large" />}
            title="Scheduled Orders"
            value={8}
          />
        </Box>
      </Stack>
    </Layout>
  );
};

export default HomeContainer;
