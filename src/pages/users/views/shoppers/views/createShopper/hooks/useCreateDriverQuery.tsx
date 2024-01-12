import axiosInstance from "../../../../../../../auth/axiosUtils";
import { Drivers } from "../../../types/Drivers";
import { useMutation } from "react-query";

const addDriver = (driver: Drivers) => {
  return axiosInstance.post("/api/admin/driver/store", driver);
};

const useCreateDriverQuery = () => {
  return useMutation(addDriver);
};

export default useCreateDriverQuery;
