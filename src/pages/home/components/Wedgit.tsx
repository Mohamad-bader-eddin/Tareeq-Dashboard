import { Box, Stack, Typography } from "@mui/material";
import PaperContainer from "../../../share/components/Paper/PaperContainer";

const Wedgit = ({ icon, title, value }: WedgitProps) => {
  return (
    <PaperContainer>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="h3">{value}</Typography>
        </Box>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {icon}
        </Typography>
      </Stack>
    </PaperContainer>
  );
};

type WedgitProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
};

export default Wedgit;
