import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchPendingOrders = () => {
  return axiosInstance.get("/api/admin/order/getBystatus/pending");
};

const usePendingOrdersQuery = () => {
  return useQuery("pending-orders", fetchPendingOrders);
};

export default usePendingOrdersQuery;
