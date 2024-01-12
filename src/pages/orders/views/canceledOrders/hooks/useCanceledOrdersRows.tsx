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
const reason = ["Cancel from Admin", "Cancel from client"];
const randomReason = () => {
  return randomArrayItem(reason);
};

const useCanceledOrdersRows = () => {
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
        canceledAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        approvedShopper: randomTraderName(),
        reason: randomReason(),
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
        canceledAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        approvedShopper: randomTraderName(),
        reason: randomReason(),
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
        canceledAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        approvedShopper: randomTraderName(),
        reason: randomReason(),
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
        canceledAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        approvedShopper: randomTraderName(),
        reason: randomReason(),
      },
    ];
    return tableRows;
  }, []);
  return { initialRows };
};

export default useCanceledOrdersRows;
