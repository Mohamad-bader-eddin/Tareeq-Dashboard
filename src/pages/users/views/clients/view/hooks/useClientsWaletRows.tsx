import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem,
  randomPrice,
} from "@mui/x-data-grid-generator";
import { useMemo } from "react";

const reasons = ["order"];
const randomReasons = () => {
  return randomArrayItem(reasons);
};

const useClientsWaletRows = () => {
  const initialRows = useMemo(() => {
    const tableRows: GridRowsProp = [
      {
        id: randomId(),
        amount: randomPrice(),
        reason: randomReasons(),
        createdAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        description: randomTraderName(),
      },
      {
        id: randomId(),
        amount: randomPrice(),
        reason: randomReasons(),
        createdAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        description: randomTraderName(),
      },
      {
        id: randomId(),
        amount: randomPrice(),
        reason: randomReasons(),
        createdAt: randomCreatedDate().toLocaleString("en-uk", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
        description: randomTraderName(),
      },
    ];
    return tableRows;
  }, []);
  return { initialRows };
};

export default useClientsWaletRows;
