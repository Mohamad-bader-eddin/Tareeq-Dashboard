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
    const tableRows: GridRowsProp = [
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
        shopper: randomTraderName(),
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
        shopper: randomTraderName(),
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
        shopper: randomTraderName(),
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
        shopper: randomTraderName(),
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
        shopper: randomTraderName(),
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
        shopper: randomTraderName(),
      },
    ];
    return tableRows;
  }, []);
  return { initialRows };
};

export default usePendingOrdersRows;
