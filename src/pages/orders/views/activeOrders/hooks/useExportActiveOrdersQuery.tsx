import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportActiveOrdersQuery = () => {
  const exportActiveOrders = async ({
    from,
    to,
  }: {
    from: string;
    to: string;
  }) => {
    const response = await axiosInstance.get(
      `/api/admin/order/getBystatus/active?download=true&from=${from}&to=${to}`,
      { responseType: "blob" }
    );
    return response;
  };
  return useMutation(exportActiveOrders);
};

export default useExportActiveOrdersQuery;
