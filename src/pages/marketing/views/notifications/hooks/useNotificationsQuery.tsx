import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchNotification = () => {
  return axiosInstance.get("/api/admin/notificationTemplate");
};

const useNotificationsQuery = () => {
  return useQuery("notifications", fetchNotification);
};

export default useNotificationsQuery;
