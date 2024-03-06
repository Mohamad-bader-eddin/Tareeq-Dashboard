import { useQuery } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const fetchHomeStats = () => {
  return axiosInstance.get("/api/admin/dashboard");
};

const useHomeQuery = () => {
  return useQuery("home-stats", fetchHomeStats);
};

export default useHomeQuery;
