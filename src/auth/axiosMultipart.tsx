import axios, { AxiosInstance } from "axios";
import jsCookie from "js-cookie";

const baseURL = "https://palderma.com/tareeq";

const axiosMultipart: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosMultipart.interceptors.request.use((config) => {
  const token = jsCookie.get("accessToken");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosMultipart;
