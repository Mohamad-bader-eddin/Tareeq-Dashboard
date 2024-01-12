import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../../../auth/axiosUtils";
import { useMutation } from "react-query";

const deletePolygon = (polygonId: GridRowId) => {
  return axiosInstance.delete(`/api/admin/polygon/${polygonId}`);
};

const useDeletePolygonQuery = () => {
  return useMutation(deletePolygon);
};

export default useDeletePolygonQuery;
