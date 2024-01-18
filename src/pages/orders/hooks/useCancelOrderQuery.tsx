import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../auth/axiosUtils";
import { useMutation } from "react-query";

const cancelOrder = (id: GridRowId) => {
  return axiosInstance.post("/api/admin/order/statusUpdate", {
    id: id,
    status: "rejected",
  });
};

const useCancelOrderQuery = () => {
  return useMutation(cancelOrder);
};

export default useCancelOrderQuery;
