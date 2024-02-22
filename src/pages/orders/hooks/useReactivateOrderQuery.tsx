import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../auth/axiosUtils";
import { useMutation } from "react-query";

const reactivateOrder = (id: GridRowId) => {
  return axiosInstance.post("/api/admin/order/statusUpdate", {
    id: id,
    status: "pending",
  });
};

const useReactivateOrderQuery = () => {
  return useMutation(reactivateOrder);
};

export default useReactivateOrderQuery;
