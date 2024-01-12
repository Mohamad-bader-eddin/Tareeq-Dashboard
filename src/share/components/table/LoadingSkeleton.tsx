import { Box, Skeleton } from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import { theme } from "../../utils/theme";

const LoadingSkeleton = () => {
  const { darkMode } = useDarkMode();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: darkMode ? theme.dark.sidebar : theme.light.sidebar,
        padding: "10px",
        overflow: "hidden",
      }}
    >
      <Skeleton
        variant="circular"
        height={40}
        width={40}
        sx={{ marginBlock: "10px 20px" }}
      />
      <Skeleton
        variant="rounded"
        height={60}
        sx={{ width: "100%", mb: "20px" }}
      />
      <Skeleton
        variant="rounded"
        height={60}
        sx={{ width: "100%", mb: "20px" }}
      />
      <Skeleton
        variant="rounded"
        height={60}
        sx={{ width: "100%", mb: "20px" }}
      />
    </Box>
  );
};

export default LoadingSkeleton;
