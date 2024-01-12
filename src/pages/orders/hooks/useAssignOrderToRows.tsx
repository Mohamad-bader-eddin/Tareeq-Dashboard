import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomTraderName,
  randomId,
  randomInt,
} from "@mui/x-data-grid-generator";

const useAssignOrderToRows = () => {
  const initialRows: GridRowsProp = [
    {
      id: randomId(),
      shopper: randomTraderName(),
      completedTripsToday: randomInt(0, 100),
    },
    {
      id: randomId(),
      shopper: randomTraderName(),
      completedTripsToday: randomInt(0, 100),
    },
    {
      id: randomId(),
      shopper: randomTraderName(),
      completedTripsToday: randomInt(0, 100),
    },
  ];
  return { initialRows };
};

export default useAssignOrderToRows;
