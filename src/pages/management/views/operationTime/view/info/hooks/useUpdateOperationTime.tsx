import { useMutation } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";
import { OperationTime } from "../../../types/OperationTime";

const updateOperationTime = (operationTime: OperationTime) => {
  return axiosInstance.post(
    `/api/admin/operationPeriod/${operationTime.id}`,
    operationTime
  );
};

const useUpdateOperationTime = () => {
  return useMutation(updateOperationTime);
};

export default useUpdateOperationTime;
