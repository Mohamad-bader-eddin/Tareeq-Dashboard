import { useMutation } from "react-query";
import axiosMultipart from "../../../../../auth/axiosMultipart";

const addSlide = (image: File) => {
  const formData = new FormData();
  formData.append("image", image);
  return axiosMultipart.post("/api/admin/slider/store", formData);
};

const useAddSlideQuery = () => {
  return useMutation(addSlide);
};

export default useAddSlideQuery;
