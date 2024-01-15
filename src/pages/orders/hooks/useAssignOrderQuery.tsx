import { useMutation } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";
import { AssignOrder } from "../types/AssignOrderType";

const assignOrder = (assignOrder: AssignOrder) => {
  return axiosInstance.post("/api/admin/order/assignDriver", assignOrder);
};

const useAssignOrderQuery = () => {
  return useMutation(assignOrder);
};

export default useAssignOrderQuery;
