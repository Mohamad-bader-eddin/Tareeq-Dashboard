import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomId,
  randomCreatedDate,
  randomArrayItem,
  randomIncoterm,
  randomTraderName,
  randomUserName,
} from "@mui/x-data-grid-generator";
import { useMemo } from "react";

const userType = ["All", "Clients", "Shoppers", "Specified User"];
const randomUserType = () => {
  return randomArrayItem(userType);
};

const useSentNotificationRows = () => {
  const initialRows = useMemo(() => {
    const tableRows: GridRowsProp = [
      {
        id: randomId(),
        user: randomTraderName(),
        userType: randomUserType(),
        title: randomIncoterm(),
        message: randomUserName(),
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
        userType: randomUserType(),
        title: randomIncoterm(),
        message: randomUserName(),
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
        userType: randomUserType(),
        title: randomIncoterm(),
        message: randomUserName(),
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
        userType: randomUserType(),
        title: randomIncoterm(),
        message: randomUserName(),
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

export default useSentNotificationRows;
