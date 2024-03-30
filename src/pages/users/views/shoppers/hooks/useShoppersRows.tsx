import { format } from "date-fns";
import { Drivers, DriversRows } from "../types/Drivers";

const useShoppersRows = ({ data }: { data: Drivers[] }) => {
  const rows: DriversRows[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id as string,
      name: el.name + " " + el?.last_name,
      phone: el.phone,
      shopperEarning: el.driver_profit as string,
      registerDate: format(new Date(el.created_at as Date), "dd/MM/yyyy"),
      zone: el?.zone?.name,
      online: el?.availability,
      completedOrdersToday: el?.daily_completed_orders,
    })
  );
  return { rows };
};

export default useShoppersRows;
