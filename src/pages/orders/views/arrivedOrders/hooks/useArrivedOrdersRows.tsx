import { format } from "date-fns";
import { Order } from "../../../types/OrderType";
import { OrderRow } from "../../../types/OrdersTableType";
import { convertPriceToSY } from "../../../../../share/utils/convertPriceToSY";

const useArrivedOrdersRows = ({ data }: { data: Order[] }) => {
  const rows: OrderRow[] = [];
  data?.forEach((el) =>
    rows.push({
      id: el.id,
      customer: el.user.name + " " + el?.user?.last_name,
      customerId: el.user.id,
      status: el.status,
      totalExpected: convertPriceToSY(el?.total_expected),
      totalPaid: convertPriceToSY(el.total_paid ? el.total_paid : 0),
      arrivedAt: format(
        new Date(el.arrive_to_customer_at as Date),
        "dd/MM/yyyy"
      ),
      shopper: el?.driver?.name,
      shopperId: el?.driver?.id,
      creditsUsed: el?.credits_used,
      rating: el?.rate?.rate,
    })
  );
  return { rows };
};

export default useArrivedOrdersRows;
