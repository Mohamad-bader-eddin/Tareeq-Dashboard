import { useMutation } from "react-query";
import axiosInstance from "../../../../../../auth/axiosUtils";

const useDeleteAllAdresses = () => {
  const deleteAllAddresses = (id: string) => {
    return axiosInstance.delete(`/api/admine/clientAddress/client/${id}`);
  };
  return useMutation(deleteAllAddresses);
};

export default useDeleteAllAdresses;
