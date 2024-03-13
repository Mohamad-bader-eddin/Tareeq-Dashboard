import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportArrivedOrdersQuery = () => {
  const exportArrivedOrders = async ({
    from,
    to,
  }: {
    from: string;
    to: string;
  }) => {
    const response = await axiosInstance.get(
      `/api/admin/order/getBystatus/arrived?download=true&from=${from}&to=${to}`,
      { responseType: "blob" }
    );
    return response;
  };
  return useMutation(exportArrivedOrders);
};

export default useExportArrivedOrdersQuery;
