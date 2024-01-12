import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomId,
  randomInt,
  randomJobTitle,
} from "@mui/x-data-grid-generator";
import { useMemo } from "react";

const useFAQsRows = () => {
  const initialRows = useMemo(() => {
    const tableRows: GridRowsProp = [
      {
        id: randomId(),
        priority: randomInt(0, 20),
        title: randomJobTitle(),
      },
      {
        id: randomId(),
        priority: randomInt(0, 20),
        title: randomJobTitle(),
      },
      {
        id: randomId(),
        priority: randomInt(0, 20),
        title: randomJobTitle(),
      },
    ];
    return tableRows;
  }, []);
  return { initialRows };
};

export default useFAQsRows;
