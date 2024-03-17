import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportClientsQuery = () => {
  const exportClientOrders = async ({
    from,
    to,
  }: {
    from: string;
    to: string;
  }) => {
    const response = await axiosInstance.get(
      `/api/admin/client?download=true&from=${from}&to=${to}`,
      {
        responseType: "blob",
      }
    );
    return response;
  };
  return useMutation(exportClientOrders);
};

export default useExportClientsQuery;
