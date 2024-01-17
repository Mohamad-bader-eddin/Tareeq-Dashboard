import { useMutation } from "react-query";
import axiosInstance from "../../../../../../../auth/axiosUtils";
import { VarialbesPeriods } from "../../../types/AppVarialbesPeriodsType";

const updateAppVarialbesPeriod = (appVariavles: VarialbesPeriods) => {
  return axiosInstance.post(
    `/api/admin/period/${appVariavles.id}`,
    appVariavles
  );
};

const useUpdateVarialbesPeriodQuery = () => {
  return useMutation(updateAppVarialbesPeriod);
};

export default useUpdateVarialbesPeriodQuery;
