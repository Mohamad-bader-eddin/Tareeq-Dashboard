import { useMutation } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";
import { TransactionType } from "../types/AddFundsFormType";

const addtransaction = (transaction: TransactionType) => {
  return axiosInstance.post("/api/admin/driver/createTransaction", transaction);
};

const useAddFundsWalletQuery = () => {
  return useMutation(addtransaction);
};

export default useAddFundsWalletQuery;
