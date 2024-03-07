import { format } from "date-fns";
import { Order, OrderLogType } from "../types/OrderType";

const useInfoOrderLogRows = ({ data }: { data: Order }) => {
  const orderLogsRows: OrderLogType[] = [];
  data?.activityLogs?.forEach((el) =>
    orderLogsRows.push({
      id: el.id,
      log: el.description,
      user: el.causer,
      created_at: format(new Date(el.created_at), "dd/MM/yyyy"),
    })
  );
  return { orderLogsRows };
};

export default useInfoOrderLogRows;
