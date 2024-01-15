import { format } from "date-fns";
import { Order } from "../../../types/OrderType";
import { OrderRow } from "../../../types/OrdersTableType";

const useScheduleOrdersRows = ({ data }: { data: Order[] }) => {
  const rows: OrderRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      customer: el.user.name,
      customerId: el.user.id,
      status: el.status,
      totalExpected: el.total_expected,
      placedon: format(new Date(el.order_date as Date), "dd/MM/yyyy"),
    })
  );
  return { rows };
};

export default useScheduleOrdersRows;
