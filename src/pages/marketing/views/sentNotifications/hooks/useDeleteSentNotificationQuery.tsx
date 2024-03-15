import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../../../auth/axiosUtils";
import { useMutation } from "react-query";

const deleteSentNotification = (sentNotification: GridRowId) => {
  return axiosInstance.delete(
    `/api/admin/notificationUser/${sentNotification}`
  );
};

const useDeleteSentNotificationQuery = () => {
  return useMutation(deleteSentNotification);
};

export default useDeleteSentNotificationQuery;
