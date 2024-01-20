import { useMutation } from "react-query";
import axiosInstance from "../../../../../../auth/axiosUtils";

const useClientUpdateQuery = (clientId: number) => {
  const updateClient = (client: Client) => {
    return axiosInstance.post(`/api/admin/client/${clientId}`, client);
  };
  return useMutation(updateClient);
};

type Client = {
  name?: string;
  phone?: string;
};

export default useClientUpdateQuery;
