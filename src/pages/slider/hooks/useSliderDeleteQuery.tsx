import { GridRowId } from "@mui/x-data-grid";
import axiosInstance from "../../../auth/axiosUtils";
import { useMutation } from "react-query";

const useSliderDeleteQuery = () => {
  const deleteSlide = (slideId: GridRowId) => {
    return axiosInstance.delete(`/api/admin/slider/${slideId}`);
  };
  return useMutation(deleteSlide);
};

export default useSliderDeleteQuery;
