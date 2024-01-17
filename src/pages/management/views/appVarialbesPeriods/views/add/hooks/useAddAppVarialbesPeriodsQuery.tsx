import { useMutation } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";
import { VarialbesPeriods } from "../../../types/AppVarialbesPeriodsType";

const addAddAppVarialbesPeriods = (appVariavles: VarialbesPeriods) => {
  return axiosInstance.post("/api/admin/period/store", appVariavles);
};

const useAddAppVarialbesPeriodsQuery = () => {
  return useMutation(addAddAppVarialbesPeriods);
};

export default useAddAppVarialbesPeriodsQuery;
