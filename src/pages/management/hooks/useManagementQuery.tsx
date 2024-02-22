import { useQuery } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const useManagementQuery = () => {
  const fetchManagement = () => {
    return axiosInstance.get("/api/admin/setting");
  };
  return useQuery("management", fetchManagement);
};

export default useManagementQuery;
