import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

type Driver = {
  id: string;
  availability: boolean;
};

const useDriverStatusQuery = () => {
  const updateDriver = (diver: Driver) => {
    return axiosInstance.post(`/api/admin/driver/${diver.id}`, diver);
  };
  return useMutation(updateDriver);
};

export default useDriverStatusQuery;
