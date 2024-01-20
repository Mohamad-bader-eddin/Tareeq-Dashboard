import { useQuery } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const fetchTransactions = () => {
  return axiosInstance.get("/api/admin/transactionType");
};

const useTransactionsQuery = () => {
  return useQuery("Transactions", fetchTransactions);
};
export default useTransactionsQuery;
