import { useMutation } from "react-query";
import { Vehicle } from "../../../types/Vehicles";
import axiosMultipart from "../../../../../auth/axiosMultipart";

const useUpdateVehicleQuery = () => {
  const updateVehicle = ({ vehicleId, vehicle }: UpdateVehicleType) => {
    const formData = new FormData();
    formData.append("id", vehicle.id as string);
    formData.append("image", vehicle.image as File);
    formData.append("name", vehicle.name);
    formData.append("description", vehicle.description);
    return axiosMultipart.post(
      `/api/admin/vehicle-type/${vehicleId}`,
      formData
    );
  };
  return useMutation(updateVehicle);
};

type UpdateVehicleType = {
  vehicleId: string;
  vehicle: Vehicle;
};

export default useUpdateVehicleQuery;
