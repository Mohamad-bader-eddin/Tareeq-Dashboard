import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../../../auth/axiosUtils";
import { useMutation } from "react-query";

const deleteBlackList = (driverId: GridRowId) => {
  return axiosInstance.delete(`/api/admin/bannedUser/${driverId}`);
};

const useBlackListDeleteQuery = () => {
  return useMutation(deleteBlackList);
};

export default useBlackListDeleteQuery;
