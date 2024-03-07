import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportDriversQuery = () => {
  const exportDriverOrders = () => {
    const response = axiosInstance.get("/api/admin/driver?download=true", {
      responseType: "blob",
    });
    return response;
  };
  return useQuery("export-driver-order", exportDriverOrders);
};

export default useExportDriversQuery;
