import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomId,
  randomCreatedDate,
  randomTraderName,
  randomPhoneNumber,
  randomEmail,
} from "@mui/x-data-grid-generator";
import { useMemo } from "react";

const useMessagesRows = () => {
  const initialRows = useMemo(() => {
    const tableRows: GridRowsProp = [
      {
        id: randomId(),
        fullName: randomTraderName(),
        phone: randomPhoneNumber(),
        email: randomEmail(),
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
        fullName: randomTraderName(),
        phone: randomPhoneNumber(),
        email: randomEmail(),
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
        fullName: randomTraderName(),
        phone: randomPhoneNumber(),
        email: randomEmail(),
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
        fullName: randomTraderName(),
        phone: randomPhoneNumber(),
        email: randomEmail(),
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

export default useMessagesRows;
