import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../../../auth/axiosUtils";
import { useMutation } from "react-query";

const useDeleteOperationTimesQuery = () => {
  const deleteOperationTime = (operationTimeId: GridRowId) => {
    return axiosInstance.delete(
      `/api/admin/operationPeriod/${operationTimeId}`
    );
  };
  return useMutation(deleteOperationTime);
};

export default useDeleteOperationTimesQuery;
