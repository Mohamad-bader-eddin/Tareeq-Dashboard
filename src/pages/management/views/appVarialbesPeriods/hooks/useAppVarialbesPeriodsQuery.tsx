import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchAppVarialbesPeriods = () => {
  return axiosInstance.get("/api/admin/period");
};

const useAppVarialbesPeriodsQuery = () => {
  return useQuery("Period", fetchAppVarialbesPeriods);
};

export default useAppVarialbesPeriodsQuery;
