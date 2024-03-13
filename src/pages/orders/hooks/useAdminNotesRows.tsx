import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomTraderName,
  randomId,
  randomAddress,
  randomCreatedDate,
} from "@mui/x-data-grid-generator";

const useAdminNotesRows = () => {
  const initialRows: GridRowsProp = [
    {
      id: randomId(),
      user: randomTraderName(),
      note: randomAddress(),
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
      note: randomAddress(),
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
      note: randomAddress(),
      createdAt: randomCreatedDate().toLocaleString("en-uk", {
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

export default useAdminNotesRows;
