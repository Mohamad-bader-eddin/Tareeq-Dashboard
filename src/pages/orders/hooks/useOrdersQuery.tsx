import { useQuery } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const fetchOrders = () => {
  return axiosInstance.get("/api/admin/order");
};

const useOrdersQuery = () => {
  return useQuery("Orders", fetchOrders);
};

export default useOrdersQuery;
