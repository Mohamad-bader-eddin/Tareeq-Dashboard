import { useMutation } from "react-query";
import axiosInstance from "../../../../../../auth/axiosUtils";
import { Zone } from "../../types/ZoneType";

const useAddZoneQuery = () => {
  const addZone = (zone: Zone) => {
    return axiosInstance.post("/api/admin/zone/store", zone);
  };
  return useMutation(addZone);
};

export default useAddZoneQuery;
