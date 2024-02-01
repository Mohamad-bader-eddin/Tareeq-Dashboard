import { useQuery } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const fetchTransactionType = () => {
  return axiosInstance.get("/api/admin/transactionType");
};

const useTransactionsTypeQuery = () => {
  return useQuery("Transaction-Type", fetchTransactionType);
};

export default useTransactionsTypeQuery;
