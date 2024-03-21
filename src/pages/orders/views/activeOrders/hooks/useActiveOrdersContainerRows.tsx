import { format } from "date-fns";
import { Order } from "../../../types/OrderType";
import { OrderRow } from "../../../types/OrdersTableType";
import { convertPriceToSY } from "../../../../../share/utils/convertPriceToSY";

const usePendingOrdersRows = ({ data }: { data: Order[] }) => {
  const rows: OrderRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      customer: el.user.name,
      customerId: el.user.id,
      status: el.status,
      totalExpected: convertPriceToSY(el?.total_expected),
      placedon: format(new Date(el.created_at as Date), "dd/MM/yyyy"),
      shopper: el?.driver?.name,
      shopperId: el?.driver?.id,
    })
  );
  return { rows };
};

export default usePendingOrdersRows;
