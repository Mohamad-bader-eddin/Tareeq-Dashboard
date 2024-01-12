import { Box, Button, Stack } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import SelectInput from "./SelectInput";
import { useTranslation } from "react-i18next";
import { randomTraderName } from "@mui/x-data-grid-generator";
import useFilterToolbarOptions from "../hooks/useFilterToolbarOptions";
import DateInput from "./DateInput";
import useMedeaQueries from "../../../share/utils/useMideaQuery";
import { StatType } from "../types/StatType";

const shopperOptions = [
  {
    value: randomTraderName(),
    key: randomTraderName(),
  },
  {
    value: randomTraderName(),
    key: randomTraderName(),
  },
];

const Toolbar = ({
  filter,
  fromDate,
  setFilter,
  setFromDate,
  setPeriod,
  setShopper,
  setToDate,
  shopper,
  toDate,
  statType,
}: ToolbarProps) => {
  const { filterOptions } = useFilterToolbarOptions();
  const [clickPeriod, setClickPeriod] = useState({
    daily: false,
    weekly: false,
    monthly: false,
  });
  const { t } = useTranslation();
  const { laptopL, laptop } = useMedeaQueries();

  const handlePeroidClick = (period: "daily" | "weekly" | "monthly") => {
    switch (period) {
      case "daily":
        setClickPeriod({ daily: true, monthly: false, weekly: false });
        setPeriod("daily");
        break;
      case "weekly":
        setClickPeriod({ daily: false, monthly: false, weekly: true });
        setPeriod("weekly");
        break;
      case "monthly":
        setClickPeriod({ daily: false, monthly: true, weekly: false });
        setPeriod("monthly");
        break;
      default:
        return;
    }
  };

  return (
    <Box>
      <Stack direction={laptopL ? "column" : "row"}>
        <Box sx={{ flexBasis: "100%" }}>
          <Stack direction={laptop ? "column" : "row"}>
            <Box
              sx={{
                flexBasis: "25%",
                marginInlineEnd: laptop ? "" : "15px",
                mt: "8px",
              }}
            >
              <SelectInput
                label={t("shopper")}
                selectValue={shopper}
                setSelectValue={setShopper}
                options={shopperOptions}
              />
            </Box>
            {statType === "orders" ||
            statType === "averageRatings" ||
            statType === "percentageOrders" ? (
              <Box
                sx={{
                  flexBasis: "25%",
                  marginInlineEnd: laptopL ? "" : "15px",
                  mt: "8px",
                }}
              >
                <SelectInput
                  label={t("filter")}
                  selectValue={filter}
                  setSelectValue={setFilter}
                  options={filterOptions}
                />
              </Box>
            ) : null}
            {statType === "percentageOrders" ? (
              <Box
                sx={{
                  flexBasis: "25%",
                  marginInlineEnd: laptop ? "" : "15px",
                }}
              >
                <DateInput
                  date={fromDate}
                  setDate={setFromDate}
                  label={t("date")}
                />
              </Box>
            ) : (
              <>
                <Box
                  sx={{
                    flexBasis: "25%",
                    marginInlineEnd: laptop ? "" : "15px",
                  }}
                >
                  <DateInput
                    date={fromDate}
                    setDate={setFromDate}
                    label={t("from")}
                  />
                </Box>
                <Box sx={{ flexBasis: "25%" }}>
                  <DateInput
                    date={toDate}
                    setDate={setToDate}
                    label={t("to")}
                  />
                </Box>
              </>
            )}
          </Stack>
        </Box>
      </Stack>
      <Stack direction={"row"}>
        <Button
          variant={clickPeriod.daily ? "contained" : "outlined"}
          sx={{ marginInlineEnd: "15px" }}
          onClick={() => handlePeroidClick("daily")}
          color={clickPeriod.daily ? "warning" : "info"}
        >
          {t("daily")}
        </Button>
        <Button
          variant={clickPeriod.weekly ? "contained" : "outlined"}
          sx={{ marginInlineEnd: "15px" }}
          onClick={() => handlePeroidClick("weekly")}
          color={clickPeriod.weekly ? "success" : "info"}
        >
          {t("weekly")}
        </Button>
        <Button
          variant={clickPeriod.monthly ? "contained" : "outlined"}
          onClick={() => handlePeroidClick("monthly")}
          color={clickPeriod.monthly ? "secondary" : "info"}
        >
          {t("monthly")}
        </Button>
      </Stack>
    </Box>
  );
};

type ToolbarProps = {
  shopper: string;
  setShopper: Dispatch<SetStateAction<string>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  fromDate: Date | null;
  setFromDate: Dispatch<SetStateAction<Date | null>>;
  toDate: Date | null;
  setToDate: Dispatch<SetStateAction<Date | null>>;
  setPeriod: Dispatch<SetStateAction<"daily" | "weekly" | "monthly">>;
  statType: StatType;
};

export default Toolbar;
