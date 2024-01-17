import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchScheduleOrders = () => {
  return axiosInstance.get("/api/admin/order/getBystatus/scheduled");
};

const useScheduleOrdersQuery = () => {
  return useQuery("schedule-orders", fetchScheduleOrders);
};

export default useScheduleOrdersQuery;
