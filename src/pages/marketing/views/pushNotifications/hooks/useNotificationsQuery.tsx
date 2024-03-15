import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchNotifications = () => {
  return axiosInstance.get("/api/admin/notificationTemplate");
};

const useNotificationsQuery = () => {
  return useQuery("notifications/push", fetchNotifications);
};

export default useNotificationsQuery;
