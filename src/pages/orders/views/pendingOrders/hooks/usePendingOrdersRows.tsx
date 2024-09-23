import { format } from "date-fns";
import { Order } from "../../../types/OrderType";
import { OrderRow } from "../../../types/OrdersTableType";
import { convertPriceToSY } from "../../../../../share/utils/convertPriceToSY";

const usePendingOrdersRows = ({ data }: { data: Order[] }) => {
  const rows: OrderRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el?.id,
      customer: {
        name: el?.user?.name + " " + el?.user?.last_name,
        completed_orders_count: el?.user?.completed_orders_count,
        canceled_orders_count: el?.user?.canceled_orders_count,
      },
      customerId: el?.user?.id,
      status: el.status,
      totalExpected: convertPriceToSY(el?.total_expected),
      placedon: format(new Date(el?.created_at as Date), "dd/MM/yyyy HH:mm:ss"),
      type: el?.type ? el.type : "",
    })
  );
  return { rows };
};

export default usePendingOrdersRows;
