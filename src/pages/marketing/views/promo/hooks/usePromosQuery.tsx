import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchPromos = () => {
  return axiosInstance.get("/api/admin/promo");
};

const usePromosQuery = () => {
  return useQuery("Promos", fetchPromos);
};

export default usePromosQuery;
