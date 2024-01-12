import { useMutation } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";
import { Promo } from "../../../types/promoType";

const useUpdatePromoQuery = () => {
  const updatPromo = ({ promo }: { promo: Promo }) => {
    return axiosInstance.post(`/api/admin/promo/${promo.id}`, promo);
  };
  return useMutation(updatPromo);
};

export default useUpdatePromoQuery;
