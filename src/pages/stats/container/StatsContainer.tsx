import PaperContainer from "../../../share/components/Paper/PaperContainer";
import Layout from "../../../share/components/layout/Layout";
import GenericChart from "../../../share/components/chart/GenericChart";
import Toolbar from "../components/Toolbar";
import { useState } from "react";
import useChartDataset from "../hooks/useChartDataset";
import { StatType } from "../types/StatType";
import useStatTypeValidation from "../hooks/useStatTypeValidation";
import StatTypeForm from "../components/StatTypeForm";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const valueFormatter = (value: number) => `${value}mm`;

const StatsContainer = () => {
  const [statType, setStatType] = useState<StatType>();
  const [shopper, setShopper] = useState("");
  const [filter, setFilter] = useState("");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [period, setPeriod] = useState<"daily" | "weekly" | "monthly">(
    "monthly"
  );
  const { t } = useTranslation();
  const { initialValues, onSubmit, validationSchema } = useStatTypeValidation({
    setStatType,
  });
  const { datasetForDay, datasetForMonth, datasetForWeek } = useChartDataset();
  return (
    <Layout>
      <PaperContainer>
        {statType ? (
          <>
            <Box sx={{ width: "300px", marginBottom: "20px" }}>
              <Button
                variant="outlined"
                onClick={() => setStatType(undefined)}
                color="error"
                sx={{
                  ".css-1d6wzja-MuiButton-startIcon": {
                    marginInline: "-8px 4px !important",
                  },
                  mb: "20px",
                }}
                startIcon={<ArrowBackIcon />}
              >
                {t("return_statistic_type")}
              </Button>
            </Box>
            <Toolbar
              filter={filter}
              setFilter={setFilter}
              shopper={shopper}
              setShopper={setShopper}
              fromDate={fromDate}
              setFromDate={setFromDate}
              toDate={toDate}
              setToDate={setToDate}
              setPeriod={setPeriod}
              statType={statType}
            />
            <GenericChart
              dataset={
                period === "daily"
                  ? datasetForDay
                  : period === "weekly"
                  ? datasetForWeek
                  : datasetForMonth
              }
              xAxis={[{ scaleType: "band", dataKey: period }]}
              series={[{ dataKey: "order", label: "Order", valueFormatter }]}
            />
          </>
        ) : (
          <StatTypeForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          />
        )}
      </PaperContainer>
    </Layout>
  );
};

export default StatsContainer;
