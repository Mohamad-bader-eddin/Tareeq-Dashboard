import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../auth/axiosUtils";
import { useMutation } from "react-query";

const useVehiclesDeleteQuery = () => {
  const deleteVehicle = (vehicleId: GridRowId) => {
    return axiosInstance.delete(`/api/admin/vehicle-type/${vehicleId}`);
  };
  return useMutation(deleteVehicle);
};

export default useVehiclesDeleteQuery;
