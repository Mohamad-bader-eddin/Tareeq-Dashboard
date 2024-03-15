import { useMutation } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";
import { Notifications } from "../../../types/NotificationsType";

const addNotification = (notification: Notifications) => {
  return axiosInstance.post(
    "/api/admin/notificationTemplate/store",
    notification
  );
};

const useAddNotificationsQuery = () => {
  return useMutation(addNotification);
};

export default useAddNotificationsQuery;
