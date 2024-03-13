import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportScheduleOrdersQuery = () => {
  const exportScheduledOrders = async ({
    from,
    to,
  }: {
    from: string;
    to: string;
  }) => {
    const response = await axiosInstance.get(
      `/api/admin/order/getBystatus/scheduled?download=true&from=${from}&to=${to}`,
      { responseType: "blob" }
    );
    return response;
  };
  return useMutation(exportScheduledOrders);
};

export default useExportScheduleOrdersQuery;
