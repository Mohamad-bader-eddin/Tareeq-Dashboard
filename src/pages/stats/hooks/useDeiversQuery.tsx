import { useQuery } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const useDeiversQuery = () => {
  const fetchDeivers = () => {
    return axiosInstance.get("/api/admin/driver/birdEye?all=true");
  };
  return useQuery("drivers", fetchDeivers);
};

export default useDeiversQuery;
