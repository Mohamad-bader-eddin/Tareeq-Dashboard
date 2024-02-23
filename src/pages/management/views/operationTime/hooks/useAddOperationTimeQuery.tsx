import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";
import { Management } from "../../../types";

const useAddOperationTimeQuery = () => {
  const addManagements = (managements: Management[]) => {
    return axiosInstance.post("/api/admin/setting/storeAll", managements);
  };
  return useMutation(addManagements);
};

export default useAddOperationTimeQuery;
