import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
  randomPrice,
} from "@mui/x-data-grid-generator";
import { useMemo } from "react";

const status = ["Pending", "En Route", "Canceled", "Scheduled"];
const randomStatus = () => {
  return randomArrayItem(status);
};

const usePendingOrdersRows = () => {
  const initialRows = useMemo(() => {
    const tableInitialRows: GridRowsProp = [
      {
        id: randomId(),
        customer: randomTraderName(),
        status: randomStatus(),
        totalExpected: randomPrice(),
        placedon: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      },
      {
        id: randomId(),
        customer: randomTraderName(),
        status: randomStatus(),
        totalExpected: randomPrice(),
        placedon: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      },
      {
        id: randomId(),
        customer: randomTraderName(),
        status: randomStatus(),
        totalExpected: randomPrice(),
        placedon: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      },
      {
        id: randomId(),
        customer: randomTraderName(),
        status: randomStatus(),
        totalExpected: randomPrice(),
        placedon: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      },
      {
        id: randomId(),
        customer: randomTraderName(),
        status: randomStatus(),
        totalExpected: randomPrice(),
        placedon: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      },
      {
        id: randomId(),
        customer: randomTraderName(),
        status: randomStatus(),
        totalExpected: randomPrice(),
        placedon: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      },
    ];
    return tableInitialRows;
  }, []);
  return { initialRows };
};

export default usePendingOrdersRows;
