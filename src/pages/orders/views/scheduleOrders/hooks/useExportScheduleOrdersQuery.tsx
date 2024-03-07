import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportScheduleOrdersQuery = () => {
  const exportScheduledOrders = async () => {
    const response = await axiosInstance.get(
      "/api/admin/order/getBystatus/scheduled?download=true",
      { responseType: "blob" }
    );
    return response;
  };
  return useQuery("export-scheduled-order", exportScheduledOrders);
};

export default useExportScheduleOrdersQuery;
