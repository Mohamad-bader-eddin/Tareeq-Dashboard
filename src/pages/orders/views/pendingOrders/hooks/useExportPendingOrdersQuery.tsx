import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportPendingOrdersQuery = () => {
  const exportPendingOrders = async () => {
    const response = await axiosInstance.get(
      "/api/admin/order/getBystatus/pending?download=true",
      { responseType: "blob" }
    );
    return response;
  };
  return useQuery("export-pending-order", exportPendingOrders);
};

export default useExportPendingOrdersQuery;
