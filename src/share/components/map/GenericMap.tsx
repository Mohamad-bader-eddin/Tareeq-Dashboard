import { Box } from "@mui/material";
import { InputMargin } from "../../constants";

const GenericMap = () => {
  return (
    <Box sx={{ width: "100%", height: "300px", mb: InputMargin }}>
      <iframe
        src="https://maps.google.com/maps?q=33.513674,36.276526&hl=es;z=14&amp;output=embed"
        loading="lazy"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </Box>
  );
};

export default GenericMap;
