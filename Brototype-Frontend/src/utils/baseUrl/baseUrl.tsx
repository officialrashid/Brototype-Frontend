import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

axios.defaults.withCredentials = true;

const fumigationApi: AxiosInstance = axios.create({
  baseURL: "http://localhost:3002",
});

fumigationApi.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status == null) {
      return res;
    } else {
      return res;
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default fumigationApi;
