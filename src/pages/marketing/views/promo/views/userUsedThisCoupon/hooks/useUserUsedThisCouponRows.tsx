import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomId,
  randomCreatedDate,
  randomPrice,
  randomTraderName,
} from "@mui/x-data-grid-generator";
import { useMemo } from "react";

const useUserUsedThisCouponRows = () => {
  const initialRows = useMemo(() => {
    const tableRows: GridRowsProp = [
      {
        id: randomId(),
        user: randomTraderName(),
        amount: randomPrice(),
        createdAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      },
      {
        id: randomId(),
        user: randomTraderName(),
        amount: randomPrice(),
        createdAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      },
      {
        id: randomId(),
        user: randomTraderName(),
        amount: randomPrice(),
        createdAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      },
      {
        id: randomId(),
        user: randomTraderName(),
        amount: randomPrice(),
        createdAt: randomCreatedDate().toLocaleString("en-uk", {
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

export default useUserUsedThisCouponRows;
