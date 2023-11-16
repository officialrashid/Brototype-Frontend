import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

axios.defaults.withCredentials = true;

const fumigationApi: AxiosInstance = axios.create({
  baseURL: "http://localhost:3002",
});

// Add a request interceptor
fumigationApi.interceptors.request.use(
  function (config) {
    // Retrieve the user role from local storage
    const userRole = localStorage.getItem('role');
    // Set headers based on the user's role
    if (userRole === 'invigilator') {
      const invigilatorToken = localStorage.getItem("invigilatorAccessToken");
      if (invigilatorToken) {
        config.headers.Authorization = `${invigilatorToken}`;
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
fumigationApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      // Redirect to the login page or handle as needed
      window.location.href = '/invigilator'

    }
    return Promise.reject(error);
  }
);

export default fumigationApi;

