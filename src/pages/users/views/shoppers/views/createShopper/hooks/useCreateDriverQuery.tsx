import axiosMultipart from "../../../../../../../auth/axiosMultipart";
import { Drivers } from "../../../types/Drivers";
import { useMutation } from "react-query";

const addDriver = (driver: Drivers) => {
  const formData = new FormData();
  formData.append("name", driver.name);
  if (driver.last_name) {
    formData.append("last_name", driver.last_name);
  }
  formData.append("password", driver.password);
  formData.append("phone", driver.phone);
  formData.append("zone_id", driver.zone_id);
  formData.append("driver_profit", driver.driver_profit as string);
  formData.append("brand", driver.brand);
  formData.append("color", driver.color);
  formData.append("model_number", driver.model_number);
  formData.append("minifacture_year", driver.minifacture_year);
  formData.append("plat_number", driver.plat_number);
  formData.append("description", driver.description);
  formData.append("vehicle_type_id", driver.vehicle_type_id);
  formData.append("vehicle_image", driver.vehicle_image as File);
  formData.append("driver_image", driver.driver_image as File);
  return axiosMultipart.post("/api/admin/driver/store", formData);
};

const useCreateDriverQuery = () => {
  return useMutation(addDriver);
};

export default useCreateDriverQuery;
