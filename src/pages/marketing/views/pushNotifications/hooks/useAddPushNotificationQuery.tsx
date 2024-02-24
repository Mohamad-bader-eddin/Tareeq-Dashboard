import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";
import { PushNotification } from "../types";

const useAddPushNotificationQuery = () => {
  const addPushNotification = (pushNotification: PushNotification) => {
    return axiosInstance.post(
      "/api/admin/notificationUser/store",
      pushNotification
    );
  };
  return useMutation(addPushNotification);
};

export default useAddPushNotificationQuery;
