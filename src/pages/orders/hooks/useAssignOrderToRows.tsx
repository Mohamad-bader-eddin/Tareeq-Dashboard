import { AssignDriver } from "../types/AssignOrderType";
import { Drivers } from "../../users/views/shoppers/types/Drivers";

const useAssignOrderToRows = ({ data }: { data: Drivers[] }) => {
  const rows: AssignDriver[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as string,
      shopper: el.name + " " + el?.last_name,
      completedTripsToday: el?.daily_completed_orders,
      type: el?.vehicle ? el?.vehicle?.vehicle_type?.name : "-",
    })
  );
  return { rows };
};

export default useAssignOrderToRows;
