import { format } from "date-fns";
import { Order } from "../../../types/OrderType";
import { OrderRow } from "../../../types/OrdersTableType";
import { convertPriceToSY } from "../../../../../share/utils/convertPriceToSY";

const usePendingOrdersRows = ({ data }: { data: Order[] }) => {
  const rows: OrderRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      customerName: el.user.name + " " + el?.user?.last_name,
      customerId: el.user.id,
      status: el.status,
      totalExpected: convertPriceToSY(el?.total_expected),
      placedon: format(new Date(el.created_at as Date), "dd/MM/yyyy HH:mm:ss"),
      shopper: el?.driver?.name + " " + el?.driver?.last_name,
      shopperId: el?.driver?.id,
      type: el?.type ? el.type : "",
    })
  );
  return { rows };
};

export default usePendingOrdersRows;
