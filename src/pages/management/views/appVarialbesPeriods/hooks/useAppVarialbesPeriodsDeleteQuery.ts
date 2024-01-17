import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../../../auth/axiosUtils";
import { useMutation } from "react-query";


const useAppVarialbesPeriodsDeleteQuery = () => {
    const deleteAppVarialbesPeriods = (appVarialbesId: GridRowId) => {
        return axiosInstance.delete(`/api/admin/period/${appVarialbesId}`);
    };
    return useMutation(deleteAppVarialbesPeriods)
}

export default useAppVarialbesPeriodsDeleteQuery