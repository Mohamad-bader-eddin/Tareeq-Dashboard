import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useExportDriversQuery = () => {
  const exportDriverOrders = async ({
    from,
    to,
  }: {
    from: string;
    to: string;
  }) => {
    const response = await axiosInstance.get(
      `/api/admin/driver?download=true&from=${from}&to=${to}`,
      {
        responseType: "blob",
      }
    );
    return response;
  };
  return useMutation(exportDriverOrders);
};

export default useExportDriversQuery;
