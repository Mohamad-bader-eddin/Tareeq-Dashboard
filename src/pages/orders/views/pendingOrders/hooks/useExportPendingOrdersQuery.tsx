import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportPendingOrdersQuery = () => {
  const exportPendingOrders = async ({
    from,
    to,
  }: {
    from: string;
    to: string;
  }) => {
    const response = await axiosInstance.get(
      `/api/admin/order/getBystatus/pending?download=true&from=${from}&to=${to}&status=pending`,
      { responseType: "blob" }
    );
    return response;
  };
  return useMutation(exportPendingOrders);
};

export default useExportPendingOrdersQuery;
