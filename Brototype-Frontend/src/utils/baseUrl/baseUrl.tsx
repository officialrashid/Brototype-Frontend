// import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

// axios.defaults.withCredentials = true;

// const fumigationApi: AxiosInstance = axios.create({
//   baseURL: "http://localhost:3002",
// });

// fumigationApi.interceptors.response.use(
//   (res: AxiosResponse) => {
//     if (res.status == null) {
//       return res;
//     } else {
//       return res;
//     }
//   },
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   }
// );

// export default fumigationApi;

import axios from 'axios';

const axiosInterceptorInstance = axios.create({
  baseURL: 'http://localhost:3002', // Replace with your API base URL
});


// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
        const accessToken = localStorage.getItem("invigilatorAccessToken");

    // If token is present add it to request's Authorization Header
    if (accessToken) {
      if (config.headers) config.headers.token = accessToken;
    }
    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);
// End of Request interceptor



// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response;
  },
  (error) => {
    // Handle response errors here

    return Promise.reject(error);
  }
);
// End of Response interceptor

export default axiosInterceptorInstance;