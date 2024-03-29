import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";

const fetchPromo = ({ queryKey }: { queryKey: QueryKey }) => {
  const PromoId = queryKey[1];
  return axiosInstance.get(`/api/admin/promo/${PromoId}`);
};

const usePromoIdQuery = (promoId: string) => {
  return useQuery(["promo", promoId], fetchPromo);
};

export default usePromoIdQuery;
