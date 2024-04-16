import { format } from "date-fns";
import { Order } from "../../../types/OrderType";
import { OrderRow } from "../../../types/OrdersTableType";
import { convertPriceToSY } from "../../../../../share/utils/convertPriceToSY";

const useCanceledOrdersRows = ({ data }: { data: Order[] }) => {
  const rows: OrderRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      customer: el?.user?.name + " " + el?.user?.last_name,
      customerId: el?.user?.id,
      status: el?.status,
      totalExpected: convertPriceToSY(el?.total_expected),
      placedon: format(new Date(el?.created_at as Date), "dd/MM/yyyy HH:mm:ss"),
      shopper: el?.driver?.last_name
        ? el?.driver?.name + " " + el?.driver?.last_name
        : el?.driver?.name,
      shopperId: el?.driver?.id,
      canceledAt: el?.updated_at
        ? format(new Date(el.updated_at), "dd/MM/yyyy HH:mm:ss")
        : "-",
      reason: el?.cancel_reason?.title,
    })
  );
  return { rows };
};

export default useCanceledOrdersRows;
