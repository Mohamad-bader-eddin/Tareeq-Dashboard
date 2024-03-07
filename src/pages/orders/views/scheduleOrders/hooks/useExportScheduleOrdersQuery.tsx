import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportScheduleOrdersQuery = () => {
  const exportScheduledOrders = () => {
    return axiosInstance.get(
      "/api/admin/order/getBystatus/scheduled?download=true"
    );
  };
  return useQuery("export-scheduled-order", exportScheduledOrders, {
    enabled: false,
  });
};

export default useExportScheduleOrdersQuery;
