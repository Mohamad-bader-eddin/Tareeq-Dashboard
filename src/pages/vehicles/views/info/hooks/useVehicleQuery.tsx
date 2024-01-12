import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchVehicle = ({ queryKey }: { queryKey: QueryKey }) => {
  const vehicleId = queryKey[1];
  return axiosInstance.get(`/api/admin/vehicle-type/${vehicleId}`);
};

const useVehicleQuery = (vehicleId: string) => {
  return useQuery(["Vehicles", vehicleId], fetchVehicle, { cacheTime: 1 });
};

export default useVehicleQuery;
