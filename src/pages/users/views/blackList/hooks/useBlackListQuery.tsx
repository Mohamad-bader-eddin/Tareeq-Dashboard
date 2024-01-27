import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchBlackList = () => {
  return axiosInstance.get("/api/admin/bannedUser");
};

const useBlackListQuery = () => {
  return useQuery("BlackList", fetchBlackList);
};

export default useBlackListQuery;
