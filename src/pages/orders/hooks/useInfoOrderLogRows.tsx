import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomArrayItem,
  randomId,
} from "@mui/x-data-grid-generator";

const status = ["Pending", "En Route", "Canceled", "Scheduled"];
const randomStatus = () => {
  return randomArrayItem(status);
};

const useInfoOrderLogRows = () => {
  const initialRows: GridRowsProp = [
    {
      id: randomId(),
      user: randomTraderName(),
      log: randomStatus(),
      created_at: randomCreatedDate().toLocaleString("en-uk", {
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
      log: randomStatus(),
      created_at: randomCreatedDate().toLocaleString("en-uk", {
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
      log: randomStatus(),
      created_at: randomCreatedDate().toLocaleString("en-uk", {
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
      log: randomStatus(),
      created_at: randomCreatedDate().toLocaleString("en-uk", {
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
      log: randomStatus(),
      created_at: randomCreatedDate().toLocaleString("en-uk", {
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
      log: randomStatus(),
      created_at: randomCreatedDate().toLocaleString("en-uk", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      }),
    },
  ];
  return { initialRows };
};

export default useInfoOrderLogRows;
