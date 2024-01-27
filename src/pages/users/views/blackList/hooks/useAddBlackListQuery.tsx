import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const addBlackList = (phone: { phone: string }) => {
  return axiosInstance.post("/api/admin/bannedUser/store", phone);
};

const useAddBlackListQuery = () => {
  return useMutation(addBlackList);
};

export default useAddBlackListQuery;
