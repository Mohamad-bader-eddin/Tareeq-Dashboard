import PaperContainer from "../../../share/components/Paper/PaperContainer";
import Layout from "../../../share/components/layout/Layout";
import GenericChart from "../../../share/components/chart/GenericChart";
import Toolbar from "../components/Toolbar";
import { useEffect, useState } from "react";
// import useChartDataset from "../hooks/useChartDataset";
import { StatType } from "../types/StatType";
import useStatTypeValidation from "../hooks/useStatTypeValidation";
import StatTypeForm from "../components/StatTypeForm";
import { Backdrop, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useStatsQuery from "../hooks/useStatsQuery";
import { format } from "date-fns";
import Spinner from "../../../share/components/Spinner";
import { Option } from "../../../share/types";

const valueFormatter = (value: number) => `${value}`;

const StatsContainer = () => {
  const [statType, setStatType] = useState<StatType>();
  const [shopper, setShopper] = useState<Option | null>(null);
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
  // const { datasetForDay, datasetForMonth, datasetForWeek } = useChartDataset();
  const { data, isLoading, refetch, isFetching } = useStatsQuery({
    model: statType as string,
    type: period,
    from: fromDate ? format(fromDate, "yyyy-MM-dd") : undefined,
    to: toDate ? format(toDate, "yyyy-MM-dd") : undefined,
    driver_id: shopper ? shopper.id : "0",
  });
  useEffect(() => {
    if (statType && fromDate && toDate) {
      refetch();
    }
  }, [statType, period, fromDate, toDate, refetch, shopper]);

  return (
    <Layout>
      <PaperContainer>
        {statType ? (
          <>
            <Box sx={{ width: "300px", marginBottom: "10px" }}>
              <Button
                variant="outlined"
                onClick={() => setStatType(undefined)}
                color="error"
                size="small"
                sx={{
                  ".css-1d6wzja-MuiButton-startIcon": {
                    marginInline: "-8px 4px !important",
                  },
                  fontSize: "12px",
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
            {isLoading || isFetching ? (
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={isLoading || isFetching}
              >
                <Spinner />
              </Backdrop>
            ) : null}
            <GenericChart
              dataset={data?.data?.content ? data?.data?.content : []}
              xAxis={
                data?.data?.content
                  ? [{ scaleType: "band", dataKey: "day" }]
                  : []
              }
              series={
                data?.data?.content
                  ? [
                      {
                        dataKey: "value",
                        label:
                          statType === "average_rating" ? "Rates" : "Minutes",
                        valueFormatter,
                      },
                    ]
                  : []
              }
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
