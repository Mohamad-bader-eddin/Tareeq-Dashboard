import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useDarkMode } from "../../../context/DarkMode";
import { AxisConfig, BarChart, BarSeriesType } from "@mui/x-charts";
import { MakeOptional } from "@mui/x-date-pickers/internals";

const GenericChart = <T extends { [key: string]: string | number | Date }>({
  dataset,
  xAxis,
  series,
}: GenericChartType<T>) => {
  const { darkMode } = useDarkMode();
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ width: "100%", height: "500px", direction: "ltr" }}>
        <BarChart dataset={dataset} xAxis={xAxis} series={series} />
      </Box>
    </ThemeProvider>
  );
};

type GenericChartType<T> = {
  dataset: T[];
  xAxis: MakeOptional<AxisConfig, "id">[];
  series: MakeOptional<BarSeriesType, "type">[];
};

export default GenericChart;
