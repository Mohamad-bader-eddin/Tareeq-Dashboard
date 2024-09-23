import { Stack, Typography } from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import { StyledAppLink } from "../../../share/components/link/AppLink.style";

const AppLinkClient = ({ path, data }: AppLinkProps) => {
  const { darkMode } = useDarkMode();
  return (
    <StyledAppLink to={path} $darkMode={darkMode}>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        {data.name}
        <Stack>
          <Typography
            color={"gray"}
            sx={{ fontSize: "10px", marginInlineStart: "5px" }}
          >
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {"( "}
              <Typography sx={{ fontSize: "10px" }} color={"green"}>
                {data.completed_orders_count}
              </Typography>
              {" /"}
              <Typography sx={{ fontSize: "10px", color: "#ad2222" }}>
                {" "}
                {data.canceled_orders_count}
              </Typography>
              {" )"}
            </Stack>
          </Typography>
        </Stack>
      </Stack>
    </StyledAppLink>
  );
};

type AppLinkProps = {
  path: string;
  data: {
    name: string;
    completed_orders_count?: number;
    canceled_orders_count?: number;
  };
};

export default AppLinkClient;
