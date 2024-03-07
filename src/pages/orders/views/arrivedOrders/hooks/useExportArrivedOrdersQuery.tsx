import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportArrivedOrdersQuery = () => {
  const exportArrivedOrders = () => {
    return axiosInstance.get(
      "/api/admin/order/getBystatus/arrived?download=true"
    );
  };
  return useQuery("export-arrived-order", exportArrivedOrders, {
    enabled: false,
  });
};

export default useExportArrivedOrdersQuery;
