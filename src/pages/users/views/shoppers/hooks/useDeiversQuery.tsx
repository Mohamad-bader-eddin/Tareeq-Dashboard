import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";
import { UserQueryType } from "../../../types/QueryType";

const fetchDeivers = ({ queryKey }: { queryKey: QueryKey }) => {
  const page = queryKey[1];
  const limit = queryKey[2];
  const id = queryKey[3];
  const phone = queryKey[4];
  const name = queryKey[5];
  const lastName = queryKey[6];
  return axiosInstance.get(
    `/api/admin/driver?page=${page}&limit=${limit}&id=${id}&phone=${phone}&name=${name}&last_name=${lastName}`
  );
};

const useDeiversQuery = ({
  page,
  limit,
  id,
  name,
  last_name,
  phone,
}: UserQueryType) => {
  return useQuery(
    [
      "drivers",
      page ? page + 1 : 1,
      limit ? limit : 10,
      id,
      phone,
      name,
      last_name,
    ],
    fetchDeivers,
    {
      enabled: !!page || !!limit,
    }
  );
};

export default useDeiversQuery;
