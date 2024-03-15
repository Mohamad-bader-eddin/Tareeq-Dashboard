import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";

const fetchNotification = ({ queryKey }: { queryKey: QueryKey }) => {
  const notificationId = queryKey[1];
  return axiosInstance.get(`/api/admin/notificationTemplate/${notificationId}`);
};

const useNotificationQuery = (notificationId: string) => {
  return useQuery(["notifications", notificationId], fetchNotification, {
    cacheTime: 1,
  });
};

export default useNotificationQuery;
