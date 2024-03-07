import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportActiveOrdersQuery = () => {
  const exportActiveOrders = async () => {
    const response = await axiosInstance.get(
      "/api/admin/order/getBystatus/active?download=true",
      { responseType: "blob" }
    );
    return response;
  };
  return useQuery("export-active-order", exportActiveOrders);
};

export default useExportActiveOrdersQuery;
