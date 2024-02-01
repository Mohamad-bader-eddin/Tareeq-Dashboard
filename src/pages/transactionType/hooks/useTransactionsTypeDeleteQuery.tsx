import { useMutation } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";
import { GridRowId } from "@mui/x-data-grid";

const useTransactionsTypeDeleteQuery = () => {
  const deleteTransactionType = (transactionTypeId: GridRowId) => {
    return axiosInstance.delete(
      `/api/admin/transactionType/${transactionTypeId}`
    );
  };

  return useMutation(deleteTransactionType);
};

export default useTransactionsTypeDeleteQuery;
