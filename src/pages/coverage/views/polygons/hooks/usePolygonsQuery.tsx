import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchPolygons = () => {
  return axiosInstance.get("/api/admin/polygon");
};

const usePolygonsQuery = () => {
  return useQuery("Polygons", fetchPolygons);
};

export default usePolygonsQuery;
