import { useMutation } from "react-query";
import { Vehicle } from "../../../types/Vehicles";
import axiosMultipart from "../../../../../auth/axiosMultipart";

const useAddVehicleQuery = () => {
  const addVehicle = (vehicle: Vehicle) => {
    const formData = new FormData();
    formData.append("image", vehicle.image as File);
    formData.append("name", vehicle.name);
    formData.append("description", vehicle.description);
    return axiosMultipart.post("/api/admin/vehicle-type/store", formData);
  };
  return useMutation(addVehicle);
};

export default useAddVehicleQuery;
