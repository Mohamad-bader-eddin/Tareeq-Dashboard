import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportClientsQuery = () => {
  const exportClientOrders = async () => {
    const response = await axiosInstance.get(
      "/api/admin/client?download=true",
      {
        responseType: "blob",
      }
    );
    return response;
  };
  return useQuery("export-client-order", exportClientOrders);
};

export default useExportClientsQuery;
