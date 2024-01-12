import { useMutation } from "react-query";
import axiosInstance from "../../../../../../auth/axiosUtils";
import { Zone } from "../../types/ZoneType";

const useUpdateZoneQuery = () => {
  const updateVehicle = ({ zone }: { zone: Zone }) => {
    return axiosInstance.post(`/api/admin/zone/${zone.id}`, zone);
  };
  return useMutation(updateVehicle);
};

export default useUpdateZoneQuery;
