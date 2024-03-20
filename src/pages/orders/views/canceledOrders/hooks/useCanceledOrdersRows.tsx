import { format } from "date-fns";
import { Order } from "../../../types/OrderType";
import { OrderRow } from "../../../types/OrdersTableType";

const useCanceledOrdersRows = ({ data }: { data: Order[] }) => {
  const rows: OrderRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      customer: el?.user?.name,
      customerId: el?.user?.id,
      status: el?.status,
      totalExpected: el?.total_expected,
      placedon: format(new Date(el?.created_at as Date), "dd/MM/yyyy"),
      shopper: el?.driver?.name,
      shopperId: el?.driver?.id,
      canceledAt: el?.cancel_reason
        ? format(new Date(el.cancel_reason?.created_at as Date), "dd/MM/yyyy")
        : "-",
      reason: el?.cancel_reason?.title,
    })
  );
  return { rows };
};

export default useCanceledOrdersRows;
