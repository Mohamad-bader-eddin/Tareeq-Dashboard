import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const fetchDeivers = ({ queryKey }: { queryKey: QueryKey }) => {
  const page = queryKey[1];
  const limit = queryKey[2];
  return axiosInstance.get(
    `/api/admin/driver?is_assign=true&page=${page}&limit=${limit}`
  );
};

const useDriverOnlineQuery = (page: number, limit: number) => {
  return useQuery(
    ["online-drivers", page ? page + 1 : 1, limit ? limit : 10],
    fetchDeivers,
    {
      enabled: !!page || !!limit,
    }
  );
};

export default useDriverOnlineQuery;
