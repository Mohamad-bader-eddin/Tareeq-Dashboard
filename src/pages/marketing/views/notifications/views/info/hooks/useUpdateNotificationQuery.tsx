import { useMutation } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";
import { Notifications } from "../../../types/NotificationsType";

const updateNotification = (notification: Notifications) => {
  return axiosInstance.post(
    `/api/admin/notificationTemplate/${notification.id}`,
    notification
  );
};

const useUpdateNotificationQuery = () => {
  return useMutation(updateNotification);
};

export default useUpdateNotificationQuery;
