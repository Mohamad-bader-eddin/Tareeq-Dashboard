import { useMutation } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";
import { AddAdmin } from "../types/AddAdmin";

const addAdmin = (admin: AddAdmin) => {
  return axiosInstance.post("/api/admin/register", admin);
};

const useAddAdminQuery = () => {
  return useMutation(addAdmin);
};

export default useAddAdminQuery;
