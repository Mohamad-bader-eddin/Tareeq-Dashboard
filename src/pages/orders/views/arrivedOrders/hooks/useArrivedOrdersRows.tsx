import { format } from "date-fns";
import { Order } from "../../../types/OrderType";
import { OrderRow } from "../../../types/OrdersTableType";
import { convertPriceToSY } from "../../../../../share/utils/convertPriceToSY";

const useArrivedOrdersRows = ({ data }: { data: Order[] }) => {
  const rows: OrderRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      customerName: el.user.name + " " + el?.user?.last_name,
      customerId: el.user.id,
      status: el.status,
      totalExpected: convertPriceToSY(el?.total_expected),
      totalPaid: el?.credits_used
        ? convertPriceToSY(el.total_paid ? el.total_paid + el?.credits_used : 0)
        : convertPriceToSY(el.total_paid ? el.total_paid : 0),
      arrivedAt: format(
        new Date(el.completed_at as Date),
        "dd/MM/yyyy HH:mm:ss"
      ),
      shopper: el?.driver?.name + " " + el?.driver?.last_name,
      shopperId: el?.driver?.id,
      creditsUsed: convertPriceToSY(el?.credits_used ? el?.credits_used : 0),
      rating: el?.rate,
      type: el?.type ? el.type : "",
    })
  );
  return { rows };
};

export default useArrivedOrdersRows;
