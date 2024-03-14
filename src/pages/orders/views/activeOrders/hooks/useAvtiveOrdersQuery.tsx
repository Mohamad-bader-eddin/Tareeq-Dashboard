import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchActiveOrders = ({ queryKey }: { queryKey: QueryKey }) => {
  const page = queryKey[1];
  const limit = queryKey[2];
  return axiosInstance.get(
    `/api/admin/order/getBystatus/active?page=${page}&limit=${limit}`
  );
};

const useAvtiveOrdersQuery = (page: number, limit: number) => {
  return useQuery(
    ["active-orders", page ? page + 1 : 1, limit ? limit : 10],
    fetchActiveOrders,
    {
      enabled: !!page || !!limit,
    }
  );
};

export default useAvtiveOrdersQuery;
