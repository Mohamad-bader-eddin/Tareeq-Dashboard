import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchTransactionType = ({ queryKey }: { queryKey: QueryKey }) => {
  const transactionTypeId = queryKey[1];
  return axiosInstance.get(`/api/admin/transactionType/${transactionTypeId}`);
};

const useTransactionTypeQuery = (transactionTypeId: string) => {
  return useQuery(
    ["Transaction-Type", transactionTypeId],
    fetchTransactionType,
    { cacheTime: 1 }
  );
};

export default useTransactionTypeQuery;
