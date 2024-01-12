import { useMutation } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";
import { Promo } from "../../../types/promoType";

const addPromo = (promo: Promo) => {
  return axiosInstance.post("/api/admin/promo/store", promo);
};

const useAddPromoQuery = () => {
  return useMutation(addPromo);
};

export default useAddPromoQuery;
