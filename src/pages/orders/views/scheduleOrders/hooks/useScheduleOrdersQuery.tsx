import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchScheduleOrders = ({ queryKey }: { queryKey: QueryKey }) => {
  const page = queryKey[1];
  const limit = queryKey[2];
  return axiosInstance.get(
    `/api/admin/order/getBystatus/scheduled?page=${page}&limit=${limit}`
  );
};

const useScheduleOrdersQuery = (page: number, limit: number) => {
  return useQuery(
    ["schedule-orders", page ? page + 1 : 1, limit ? limit : 10],
    fetchScheduleOrders,
    {
      enabled: !!page || !!limit,
    }
  );
};

export default useScheduleOrdersQuery;
