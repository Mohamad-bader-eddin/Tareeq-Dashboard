import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../../auth/axiosUtils";

const fetchZone = ({ queryKey }: { queryKey: QueryKey }) => {
  const zoneId = queryKey[1];
  return axiosInstance.get(`/api/admin/zone/${zoneId}`);
};

const useZoneQuery = (zoneId: string) => {
  return useQuery(["Zones", zoneId], fetchZone);
};

export default useZoneQuery;
