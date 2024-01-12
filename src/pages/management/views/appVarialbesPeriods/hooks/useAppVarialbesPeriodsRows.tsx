import { GridRowsProp } from "@mui/x-data-grid";
import { randomId, randomCreatedDate } from "@mui/x-data-grid-generator";
import { useMemo } from "react";

const useAppVarialbesPeriodsRows = () => {
  const initialRows = useMemo(() => {
    const tableRows: GridRowsProp = [
      {
        id: randomId(),
        periodTimeFrom: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        periodTimeTo: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      },
      {
        id: randomId(),
        periodTimeFrom: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        periodTimeTo: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      },
      {
        id: randomId(),
        periodTimeFrom: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        periodTimeTo: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      },
    ];
    return tableRows;
  }, []);
  return { initialRows };
};

export default useAppVarialbesPeriodsRows;
