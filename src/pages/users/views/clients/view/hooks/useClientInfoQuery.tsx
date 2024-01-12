import { useQuery, QueryKey } from "react-query";
import axiosInstance from "../../../../../../auth/axiosUtils";

const fetchClient = ({ queryKey }: { queryKey: QueryKey }) => {
  const clientId = queryKey[1];
  return axiosInstance.get(`/api/admin/client/${clientId}`);
};

const useClientInfoQuery = (clientId: string) => {
  return useQuery(["clients", clientId], fetchClient);
};

export default useClientInfoQuery;
