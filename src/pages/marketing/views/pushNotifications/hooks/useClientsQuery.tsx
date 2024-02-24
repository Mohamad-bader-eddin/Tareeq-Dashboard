import { useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchClients = () => {
  return axiosInstance.get("/api/admin/client");
};

const useClientsQuery = () => {
  return useQuery("clients", fetchClients);
};

export default useClientsQuery;
