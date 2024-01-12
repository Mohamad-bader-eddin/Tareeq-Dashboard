import { useQuery } from "react-query";
import axiosInstance from "../../../auth/axiosUtils";

const fetchSlider = () => {
  return axiosInstance.get("/api/client/slider");
};

const useSliderQuery = () => {
  return useQuery("Slider", fetchSlider);
};

export default useSliderQuery;
