import { useMutation } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const useClientByPhoneQuery = () => {
  const fetchClientByPhone = (phone: string) => {
    return axiosInstance.get(`/api/admin/client/getByPhone/${phone}`);
  };
  return useMutation(fetchClientByPhone);
};

export default useClientByPhoneQuery;
