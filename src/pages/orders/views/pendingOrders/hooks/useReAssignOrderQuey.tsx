import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const useReAssignOrderQuey = () => {
  const reAssignOrder = ({orderId} : {orderId :string}) => {
    return axiosInstance.get(
      `/api/admin/order/re-assign/${orderId}`);
  };
  return useMutation(reAssignOrder);
};

export default useReAssignOrderQuey;
