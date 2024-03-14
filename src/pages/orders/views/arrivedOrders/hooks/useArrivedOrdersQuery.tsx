import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchArrivedOrder = ({ queryKey }: { queryKey: QueryKey }) => {
  const page = queryKey[1];
  const limit = queryKey[2];
  return axiosInstance.get(
    `/api/admin/order/getBystatus/arrived?page=${page}&limit=${limit}`
  );
};

const useArrivedOrdersQuery = (page: number, limit: number) => {
  return useQuery(
    ["arrived-orders", page ? page + 1 : 1, limit ? limit : 10],
    fetchArrivedOrder,
    {
      enabled: !!page || !!limit,
    }
  );
};

export default useArrivedOrdersQuery;
