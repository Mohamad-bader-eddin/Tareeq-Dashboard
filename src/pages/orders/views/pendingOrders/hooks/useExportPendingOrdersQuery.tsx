import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportPendingOrdersQuery = () => {
  const exportPendingOrders = () => {
    return axiosInstance.get(
      "/api/admin/order/getBystatus/pending?download=true"
    );
  };
  return useQuery("export-pending-order", exportPendingOrders, {
    enabled: false,
  });
};

export default useExportPendingOrdersQuery;
