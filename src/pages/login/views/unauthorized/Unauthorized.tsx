import { Box, Button, CardMedia, Stack, Typography } from "@mui/material";
import { theme } from "../../../../share/utils/theme";
import { TRANSITION } from "../../../../share/constants";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ height: "100vh" }}
    >
      <Box sx={{ width: "250px", height: "200px", mb: "20px" }}>
        <CardMedia image="/images/unauthorized.png" component={"img"} />
      </Box>
      <Typography
        variant="h6"
        color={"red"}
        sx={{
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: "bold",
          mb: "20px",
        }}
      >
        you do not have permesion to enter
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: "20px",
        }}
      >
        please login again
      </Typography>
      <Button
        onClick={() => navigate("/login", { replace: true })}
        sx={{
          width: "200px",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: theme.light.main,
          color: "#fff",
          transition: TRANSITION,
          "&:hover": {
            backgroundColor: "#0a3f54",
          },
        }}
      >
        Login
      </Button>
    </Stack>
  );
};

export default Unauthorized;
