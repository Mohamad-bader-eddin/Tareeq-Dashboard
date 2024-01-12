import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";

const fetchPromo = ({ queryKey }: { queryKey: QueryKey }) => {
  const promoId = queryKey[1];
  return axiosInstance.get(`/api/admin/promo/${promoId}`);
};

const usePromoQuery = (promoId: string) => {
  return useQuery(["Promos", promoId], fetchPromo, { cacheTime: 1 });
};

export default usePromoQuery;
