import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportCanceledOrdersQuery = () => {
  const exportCanceledOrders = async () => {
    const response = await axiosInstance.get(
      "/api/admin/order/getBystatus/canceled?download=true"
    );
    return response;
  };
  return useQuery("export-canceled-order", exportCanceledOrders);
};

export default useExportCanceledOrdersQuery;
