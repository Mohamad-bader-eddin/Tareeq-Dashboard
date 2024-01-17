import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";

const fetchAppVarialbesPeriod = ({ queryKey }: { queryKey: QueryKey }) => {
  const appVarialbesPeriodId = queryKey[1];
  return axiosInstance.get(`/api/admin/period/${appVarialbesPeriodId}`);
};

const useAppVarialbesPeriodQuery = (id: string) => {
  return useQuery(["Period", id], fetchAppVarialbesPeriod, { cacheTime: 1 });
};

export default useAppVarialbesPeriodQuery;
