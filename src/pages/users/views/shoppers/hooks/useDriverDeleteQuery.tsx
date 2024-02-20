import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../../../auth/axiosUtils";
import { useMutation } from "react-query";

const useDriverDeleteQuery = () => {
  const deleteDriver = (driverId: GridRowId) => {
    return axiosInstance.delete(`/api/admin/driver/${driverId}`);
  };
  return useMutation(deleteDriver);
};

export default useDriverDeleteQuery;
