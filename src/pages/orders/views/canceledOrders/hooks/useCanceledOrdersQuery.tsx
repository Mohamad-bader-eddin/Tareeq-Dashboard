import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchCanceledOrder = () => {
  return axiosInstance.get("/api/admin/order/getBystatus/canceled");
};

const useCanceledOrdersQuery = () => {
  return useQuery("canceled-orders", fetchCanceledOrder);
};

export default useCanceledOrdersQuery;
