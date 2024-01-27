import { useMutation } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";

const useChangePasswordQuery = (driverId: string) => {
  const changePassword = (password: { password: string }) => {
    return axiosInstance.post(
      `/api/admin/driver/updatePassword/${driverId}`,
      password
    );
  };
  return useMutation(changePassword);
};

export default useChangePasswordQuery;
