import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportClientsQuery = () => {
  const exportClientOrders = () => {
    return axiosInstance.get("/api/admin/client?download=true");
  };
  return useQuery("export-client-order", exportClientOrders, {
    enabled: false,
  });
};

export default useExportClientsQuery;
