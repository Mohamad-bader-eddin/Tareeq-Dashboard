import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportActiveOrdersQuery = () => {
  const exportActiveOrders = () => {
    return axiosInstance.get(
      "/api/admin/order/getBystatus/active?download=true"
    );
  };
  return useQuery("export-active-order", exportActiveOrders, {
    enabled: false,
  });
};

export default useExportActiveOrdersQuery;
