import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";
import { ChangePassword } from "../types/ChangePassword";

const changePassword = (newPassword: ChangePassword) => {
  return axiosInstance.post("/api/admin/change", newPassword);
};

const useChangePasswordQuery = () => {
  return useMutation(changePassword);
};

export default useChangePasswordQuery;
