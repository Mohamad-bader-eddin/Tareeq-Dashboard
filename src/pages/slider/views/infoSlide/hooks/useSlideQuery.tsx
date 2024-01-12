import { QueryKey, useQuery } from "react-query";
import axiosInstance from "../../../../../auth/axiosUtils";

const fetchSlide = ({ queryKey }: { queryKey: QueryKey }) => {
  const slideId = queryKey[1];
  return axiosInstance.get(`/api/admin/slider/${slideId}`);
};

const useSlideQuery = (slideId: string) => {
  return useQuery(["Slider", slideId], fetchSlide, { cacheTime: 1 });
};

export default useSlideQuery;
