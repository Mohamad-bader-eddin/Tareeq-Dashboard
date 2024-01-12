import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomTraderName,
  randomId,
  randomArrayItem,
} from "@mui/x-data-grid-generator";

const status = ["Pending", "En Route", "Canceled", "Scheduled"];
const randomStatus = () => {
  return randomArrayItem(status);
};

const useInfoOrderShoppersRows = () => {
  const initialRows: GridRowsProp = [
    {
      id: randomId(),
      shopper_id: randomId(),
      name: randomTraderName(),
      status: randomStatus(),
    },
    {
      id: randomId(),
      shopper_id: randomId(),
      name: randomTraderName(),
      status: randomStatus(),
    },
    {
      id: randomId(),
      shopper_id: randomId(),
      name: randomTraderName(),
      status: randomStatus(),
    },
    {
      id: randomId(),
      shopper_id: randomId(),
      name: randomTraderName(),
      status: randomStatus(),
    },
    {
      id: randomId(),
      shopper_id: randomId(),
      name: randomTraderName(),
      status: randomStatus(),
    },
    {
      id: randomId(),
      shopper_id: randomId(),
      name: randomTraderName(),
      status: randomStatus(),
    },
  ];
  return { initialRows };
};

export default useInfoOrderShoppersRows;
