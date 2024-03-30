import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";
import { OrderQueryType } from "../../../types/OrderQueryType";

const fetchScheduleOrders = ({ queryKey }: { queryKey: QueryKey }) => {
  const page = queryKey[1];
  const limit = queryKey[2];
  const orderNumber = queryKey[3];
  const fromDate = queryKey[4];
  const toDate = queryKey[5];
  const phone = queryKey[6];
  const name = queryKey[7];
  return axiosInstance.get(
    `/api/admin/order/getBystatus/scheduled?page=${page}&limit=${limit}&order_id=${orderNumber}&from=${fromDate}&to=${toDate}&phone=${phone}&name=${name}`
  );
};

const useScheduleOrdersQuery = ({
  page,
  limit,
  orderNumber,
  fromDate,
  toDate,
  name,
  phone,
}: OrderQueryType) => {
  return useQuery(
    [
      "schedule-orders",
      page ? page + 1 : 1,
      limit ? limit : 10,
      orderNumber,
      fromDate,
      toDate,
      phone,
      name,
    ],
    fetchScheduleOrders,
    {
      enabled: !!page || !!limit,
    }
  );
};

export default useScheduleOrdersQuery;
