import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../../../auth/axiosUtils";
import { useMutation } from "react-query";

const deleteNotification = (notificationId: GridRowId) => {
  return axiosInstance.delete(
    `/api/admin/notificationTemplate/${notificationId}`
  );
};

const useDeleteNotificationQuery = () => {
  return useMutation(deleteNotification);
};

export default useDeleteNotificationQuery;
