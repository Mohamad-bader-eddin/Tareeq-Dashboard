import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";
import { TransactionType } from "../../../types/TransactionType";

const addTransactionType = (transactionType: TransactionType) => {
  return axiosInstance.post(
    "/api/admin/transactionType/store",
    transactionType
  );
};
const useAddTransactionTypeQuery = () => {
  return useMutation(addTransactionType);
};

export default useAddTransactionTypeQuery;
