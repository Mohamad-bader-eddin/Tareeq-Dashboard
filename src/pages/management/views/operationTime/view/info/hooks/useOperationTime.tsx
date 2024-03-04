import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";

const fetchOperationTime = ({ queryKey }: { queryKey: QueryKey }) => {
  const operationTimeId = queryKey[1];
  return axiosInstance.get(`/api/admin/operationPeriod/${operationTimeId}`);
};

const useOperationTime = (id: string) => {
  return useQuery(["operation-times", id], fetchOperationTime);
};

export default useOperationTime;
