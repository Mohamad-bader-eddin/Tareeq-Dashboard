import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../../../auth/axiosUtils";
import { useMutation } from "react-query";

const useChangeAvailabilityQuery = () => {
  const changeAvailability = (availability: {
    availability: 0 | 1;
    driver_id: GridRowId;
  }) => {
    return axiosInstance.post(
      "/api/admin/driver/changeAvailability",
      availability
    );
  };
  return useMutation(changeAvailability);
};

export default useChangeAvailabilityQuery;
