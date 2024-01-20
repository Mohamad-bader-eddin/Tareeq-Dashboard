import { useMutation } from "react-query";
import axiosInstance from "../../../../../../auth/axiosUtils";
import { TransactionType } from "../types/ClientInfoInputsType";

const addtransaction = (transaction: TransactionType) => {
  return axiosInstance.post("/api/admin/client/createTransaction", transaction);
};

const useAddFundsWalletQuery = () => {
  return useMutation(addtransaction);
};

export default useAddFundsWalletQuery;
