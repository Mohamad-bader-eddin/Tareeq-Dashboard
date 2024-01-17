import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchArrivedOrder = () => {
  return axiosInstance.get("/api/admin/order/getBystatus/arrived");
};

const useArrivedOrdersQuery = () => {
  return useQuery("arrived-orders", fetchArrivedOrder);
};

export default useArrivedOrdersQuery;
