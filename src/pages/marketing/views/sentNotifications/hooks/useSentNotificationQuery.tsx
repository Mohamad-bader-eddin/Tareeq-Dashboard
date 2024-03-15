import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchSentNotification = () => {
  return axiosInstance.get("/api/admin/notificationUser");
};

const useSentNotificationQuery = () => {
  return useQuery("sent-notificatio", fetchSentNotification);
};

export default useSentNotificationQuery;
