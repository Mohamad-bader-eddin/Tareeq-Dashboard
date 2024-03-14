import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchCanceledOrder = ({ queryKey }: { queryKey: QueryKey }) => {
  const page = queryKey[1];
  const limit = queryKey[2];
  return axiosInstance.get(
    `/api/admin/order/getBystatus/canceled?page=${page}&limit=${limit}`
  );
};

const useCanceledOrdersQuery = (page: number, limit: number) => {
  return useQuery(
    ["canceled-orders", page ? page + 1 : 1, limit ? limit : 10],
    fetchCanceledOrder,
    {
      enabled: !!page || !!limit,
    }
  );
};

export default useCanceledOrdersQuery;
