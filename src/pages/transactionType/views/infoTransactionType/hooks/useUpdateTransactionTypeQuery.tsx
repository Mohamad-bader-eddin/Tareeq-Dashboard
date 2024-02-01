import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";
import { TransactionType } from "../../../types/TransactionType";

const useUpdateTransactionTypeQuery = () => {
  const updateTransactionType = (transactionType: TransactionType) => {
    return axiosInstance.post(
      `/api/admin/transactionType/${transactionType.id}`,
      transactionType
    );
  };
  return useMutation(updateTransactionType);
};

export default useUpdateTransactionTypeQuery;
