import { Box, Stack, Typography } from "@mui/material";
import PaperContainer from "../../../share/components/Paper/PaperContainer";

const Wedgit = ({ icon, title, value }: WedgitProps) => {
  return (
    <PaperContainer margin="6px" padding="4px">
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box>
          <Typography variant="body2">{title}</Typography>
          <Typography variant="body1">{value}</Typography>
        </Box>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
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
