import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../auth/axiosUtils";
import { useMutation } from "react-query";

const deleteAdminNote = (adminNoteId: GridRowId) => {
  return axiosInstance.delete(`/api/admin/OrderNote/${adminNoteId}`);
};

const useDeleteAdminNote = () => {
  return useMutation(deleteAdminNote);
};

export default useDeleteAdminNote;
