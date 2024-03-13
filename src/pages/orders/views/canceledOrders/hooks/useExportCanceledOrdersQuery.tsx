import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportCanceledOrdersQuery = () => {
  const exportCanceledOrders = async ({
    from,
    to,
  }: {
    from: string;
    to: string;
  }) => {
    const response = await axiosInstance.get(
      `/api/admin/order/getBystatus/canceled?download=true&from=${from}&to=${to}`
    );
    return response;
  };
  return useMutation(exportCanceledOrders);
};

export default useExportCanceledOrdersQuery;
