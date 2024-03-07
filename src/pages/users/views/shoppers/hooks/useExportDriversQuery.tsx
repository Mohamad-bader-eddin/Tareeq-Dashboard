import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportDriversQuery = () => {
  const exportDriverOrders = () => {
    return axiosInstance.get("/api/admin/driver?download=true");
  };
  return useQuery("export-driver-order", exportDriverOrders, {
    enabled: false,
  });
};

export default useExportDriversQuery;
