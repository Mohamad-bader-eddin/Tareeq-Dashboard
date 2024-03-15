import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchPendingOrders = ({ queryKey }: { queryKey: QueryKey }) => {
  const page = queryKey[1];
  const limit = queryKey[2];
  return axiosInstance.get(
    `/api/admin/order/getBystatus/pending?page=${page}&limit=${limit}`
  );
};

const usePendingOrdersQuery = (page: number, limit: number) => {
  return useQuery(
    ["pending-orders", page ? page + 1 : 1, limit ? limit : 10],
    fetchPendingOrders,
    {
      enabled: !!page || !!limit,
    }
  );
};

export default usePendingOrdersQuery;
