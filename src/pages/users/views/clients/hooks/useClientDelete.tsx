import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";
import { GridRowId } from "@mui/x-data-grid";

const useClientDelete = () => {
  const deleteClient = (clientId: GridRowId) => {
    return axiosInstance.delete(`/api/admin/client/${clientId}`);
  };
  return useMutation(deleteClient);
};

export default useClientDelete;
