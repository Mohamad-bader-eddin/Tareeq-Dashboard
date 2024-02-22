import { useMutation } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";
import { Management } from "../types";

const useUpdateManagementQuery = () => {
  const addManagement = (management: Management) => {
    return axiosInstance.post("/api/admin/setting/store", management);
  };
  return useMutation(addManagement);
};

export default useUpdateManagementQuery;
