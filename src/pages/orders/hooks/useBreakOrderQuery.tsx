import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../auth/axiosUtils";
import { useMutation } from "react-query";

const breakOrder = (id: GridRowId) => {
  return axiosInstance.post("/api/admin/order/statusUpdate", {
    id: id,
    status: "pending",
  });
};

const useBreakOrderQuery = () => {
  return useMutation(breakOrder);
};

export default useBreakOrderQuery;
