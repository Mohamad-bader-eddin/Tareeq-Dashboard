import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchClients = ({ queryKey }: { queryKey: QueryKey }) => {
  const page = queryKey[1];
  const limit = queryKey[2];
  return axiosInstance.get(`/api/admin/client?page=${page}&limit=${limit}`);
};

const useClientsQuery = (page: number, limit: number) => {
  return useQuery(
    ["clients", page ? page + 1 : 1, limit ? limit : 10],
    fetchClients,
    {
      enabled: !!page || !!limit,
    }
  );
};

export default useClientsQuery;
