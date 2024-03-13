import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomId,
  randomCreatedDate,
  randomArrayItem,
  randomTraderName,
} from "@mui/x-data-grid-generator";
import { useMemo } from "react";

const userType = ["All", "Clients", "Shoppers", "Specified User"];
const randomUserType = () => {
  return randomArrayItem(userType);
};

const useNotificationRows = () => {
  const initialRows = useMemo(() => {
    const tableRows: GridRowsProp = [
      {
        id: randomId(),
        title: randomTraderName(),
        message: randomUserType(),
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
        title: randomTraderName(),
        message: randomUserType(),
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
        title: randomTraderName(),
        message: randomUserType(),
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

export default useNotificationRows;
