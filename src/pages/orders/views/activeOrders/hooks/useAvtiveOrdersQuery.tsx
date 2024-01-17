import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchActiveOrders = () => {
  return axiosInstance.get("/api/admin/order/getBystatus/active");
};

const useAvtiveOrdersQuery = () => {
  return useQuery("active-orders", fetchActiveOrders);
};

export default useAvtiveOrdersQuery;
