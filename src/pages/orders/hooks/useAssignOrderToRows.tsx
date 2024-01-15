import { AssignDriver } from "../types/AssignOrderType";
import { Drivers } from "../../users/views/shoppers/types/Drivers";

const useAssignOrderToRows = ({ data }: { data: Drivers[] }) => {
  const rows: AssignDriver[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as number,
      shopper: el.name,
    })
  );
  return { rows };
};

export default useAssignOrderToRows;
