import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useUserTypeQuery = () => {
  const fetchUserType = () => {
    return axiosInstance.get("/api/admin/notification");
  };
  return useQuery("user-type", fetchUserType);
};

export default useUserTypeQuery;
