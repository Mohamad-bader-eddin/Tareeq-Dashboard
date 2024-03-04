import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useOperationTimesQuery = () => {
  const fetchOperationTimes = () => {
    return axiosInstance.get("/api/admin/operationPeriod");
  };

  return useQuery("operation-times", fetchOperationTimes);
};

export default useOperationTimesQuery;
