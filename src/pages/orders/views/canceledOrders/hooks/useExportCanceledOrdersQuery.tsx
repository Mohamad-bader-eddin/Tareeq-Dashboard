import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportCanceledOrdersQuery = () => {
  const exportCanceledOrders = () => {
    return axiosInstance.get(
      "/api/admin/order/getBystatus/canceled?download=true"
    );
  };
  return useQuery("export-canceled-order", exportCanceledOrders, {
    enabled: false,
  });
};

export default useExportCanceledOrdersQuery;
