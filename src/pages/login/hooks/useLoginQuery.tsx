import { useMutation } from "react-query";
import { User } from "../types/userType";
import axiosInstance from "../../../auth/axiosUtils";

const useLoginQuery = () => {
  const fetchLogin = (user: User) => {
    return axiosInstance.post("/api/admin/login", user);
  };
  return useMutation(fetchLogin);
};

export default useLoginQuery;
