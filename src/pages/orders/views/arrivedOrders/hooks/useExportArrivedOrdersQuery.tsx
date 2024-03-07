import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportArrivedOrdersQuery = () => {
  const exportArrivedOrders = async () => {
    const response = await axiosInstance.get(
      "/api/admin/order/getBystatus/arrived?download=true",
      { responseType: "blob" }
    );
    return response;
  };
  return useQuery("export-arrived-order", exportArrivedOrders);
};

export default useExportArrivedOrdersQuery;
