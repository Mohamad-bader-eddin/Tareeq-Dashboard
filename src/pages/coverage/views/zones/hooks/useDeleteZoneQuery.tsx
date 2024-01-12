import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../../../auth/axiosUtils";
import { useMutation } from "react-query";

const useDeleteZoneQuery = () => {
  const deleteZone = (zoneId: GridRowId) => {
    return axiosInstance.delete(`/api/admin/zone/${zoneId}`);
  };
  return useMutation(deleteZone);
};

export default useDeleteZoneQuery;
