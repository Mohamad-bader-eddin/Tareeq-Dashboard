import { useMutation } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const useUpdateAdminNoteQuery = () => {
  const updateAdminNote = (adminNote: {
    title: string;
    order_id: string;
    admin_id: string;
  }) => {
    return axiosInstance.post("/api/admin/OrderNote/store", adminNote);
  };
  return useMutation(updateAdminNote);
};

export default useUpdateAdminNoteQuery;
