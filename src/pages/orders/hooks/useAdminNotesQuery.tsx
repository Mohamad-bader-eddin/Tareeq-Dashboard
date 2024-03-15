import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const fetchAdminNotes = ({ queryKey }: { queryKey: QueryKey }) => {
  const orderId = queryKey[1];
  return axiosInstance.get(`/api/admin/OrderNote?order_id=${orderId}`);
};

const useAdminNotesQuery = (id: string) => {
  return useQuery(["admin-note", id], fetchAdminNotes);
};
export default useAdminNotesQuery;
