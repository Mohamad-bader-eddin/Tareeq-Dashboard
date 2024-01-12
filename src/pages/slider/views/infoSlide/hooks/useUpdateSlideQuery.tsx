import { useMutation } from "react-query";
import axiosMultipart from "../../../../../auth/axiosMultipart";

const updateSlide = ({ slideId, image }: { slideId: string; image: File }) => {
  const formData = new FormData();
  formData.append("id", slideId);
  formData.append("image", image);
  return axiosMultipart.post(`/api/admin/slider/${slideId}`, formData);
};

const useUpdateSlideQuery = () => {
  return useMutation(updateSlide);
};

export default useUpdateSlideQuery;
