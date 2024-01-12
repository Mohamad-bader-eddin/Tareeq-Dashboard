import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";

const fetchDriver = ({ queryKey }: { queryKey: QueryKey }) => {
  const driverId = queryKey[1];
  return axiosInstance.get(`/api/admin/driver/${driverId}`);
};

const useInfoDriverQuery = (driverId: string) => {
  return useQuery(["Drivers", driverId], fetchDriver);
};

export default useInfoDriverQuery;
