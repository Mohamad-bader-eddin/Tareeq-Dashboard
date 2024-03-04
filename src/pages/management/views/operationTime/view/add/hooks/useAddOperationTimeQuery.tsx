import { useMutation } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";
import { OperationTime } from "../../../types/OperationTime";

const useAddOperationTimeQuery = () => {
  const addManagements = (operationTime: OperationTime) => {
    return axiosInstance.post(
      "/api/admin/operationPeriod/store",
      operationTime
    );
  };
  return useMutation(addManagements);
};

export default useAddOperationTimeQuery;
