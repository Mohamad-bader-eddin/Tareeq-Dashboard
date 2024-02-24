import { Box } from "@mui/material";
import { InputMargin } from "../../constants";

const GenericEmbededMap = ({ lat, long }: GenericEmbededMapProps) => {
  const tmp =
    `https://maps.google.com/maps?q=${lat},${long}&hl=es;z=14&amp;` +
    "&output=embed";
  return (
    <Box sx={{ width: "100%", height: "300px", mb: InputMargin }}>
      <iframe
        src={tmp}
        loading="lazy"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </Box>
  );
};

type GenericEmbededMapProps = {
  lat: number;
  long: number;
};

export default GenericEmbededMap;
