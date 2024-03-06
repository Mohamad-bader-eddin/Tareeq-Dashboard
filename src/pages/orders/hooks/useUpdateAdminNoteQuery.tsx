import { useMutation } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const useUpdateAdminNoteQuery = () => {
  const updateAdminNote = (adminNote: { admin_note: string; id: string }) => {
    return axiosInstance.post("/api/admin/order/updateAdminNote", adminNote);
  };
  return useMutation(updateAdminNote);
};

export default useUpdateAdminNoteQuery;
