import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../../../auth/axiosUtils";
import { useMutation } from "react-query";

const useDeleteQuery = () => {
  const deletePromo = (promoId: GridRowId) => {
    return axiosInstance.delete(`/api/admin/promo/${promoId}`);
  };
  return useMutation(deletePromo);
};

export default useDeleteQuery;
