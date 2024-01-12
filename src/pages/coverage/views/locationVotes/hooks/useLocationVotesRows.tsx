import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomId,
  randomTraderName,
} from "@mui/x-data-grid-generator";
import { useMemo } from "react";

const useLocationVotesRows = () => {
  const initialRows = useMemo(() => {
    const tableRows: GridRowsProp = [
      {
        id: randomId(),
        client: randomTraderName(),
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
        client: randomTraderName(),
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
        client: randomTraderName(),
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
        client: randomTraderName(),
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

export default useLocationVotesRows;
