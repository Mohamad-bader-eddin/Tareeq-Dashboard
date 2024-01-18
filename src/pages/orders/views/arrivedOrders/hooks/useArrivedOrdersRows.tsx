// import { format } from "date-fns";
import { Order } from "../../../types/OrderType";
import { OrderRow } from "../../../types/OrdersTableType";

const useArrivedOrdersRows = ({ data }: { data: Order[] }) => {
  const rows: OrderRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      customer: el.user.name,
      customerId: el.user.id,
      status: el.status,
      totalExpected: el.total_expected,
      // arrivedAt: format(new Date(el.order_date as Date), "dd/MM/yyyy"),
      shopper: el?.driver?.name,
      shopperId: el?.driver?.id,
      // rating: el?.rate,
    })
  );
  return { rows };
};

export default useArrivedOrdersRows;
