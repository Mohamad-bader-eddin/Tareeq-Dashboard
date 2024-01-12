import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
  randomPrice,
  randomInt,
} from "@mui/x-data-grid-generator";
import { useMemo } from "react";

const status = ["Pending", "En Route", "Canceled", "Scheduled"];
const randomStatus = () => {
  return randomArrayItem(status);
};

const useArrivedOrdersRows = () => {
  const initialRows = useMemo(() => {
    const tableRows: GridRowsProp = [
      {
        id: randomId(),
        customer: randomTraderName(),
        status: randomStatus(),
        totalExpected: randomPrice(),
        totalPaid: randomPrice(),
        arrivedAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        shopper: randomTraderName(),
        creditsUsed: randomPrice(),
        rating: randomInt(0, 5),
      },
      {
        id: randomId(),
        customer: randomTraderName(),
        status: randomStatus(),
        totalExpected: randomPrice(),
        totalPaid: randomPrice(),
        arrivedAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        shopper: randomTraderName(),
        creditsUsed: randomPrice(),
        rating: randomInt(0, 5),
      },
      {
        id: randomId(),
        customer: randomTraderName(),
        status: randomStatus(),
        totalExpected: randomPrice(),
        totalPaid: randomPrice(),
        arrivedAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        shopper: randomTraderName(),
        creditsUsed: randomPrice(),
        rating: randomInt(0, 5),
      },
      {
        id: randomId(),
        customer: randomTraderName(),
        status: randomStatus(),
        totalExpected: randomPrice(),
        totalPaid: randomPrice(),
        arrivedAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        shopper: randomTraderName(),
        creditsUsed: randomPrice(),
        rating: randomInt(0, 5),
      },
    ];
    return tableRows;
  }, []);
  return { initialRows };
};

export default useArrivedOrdersRows;
