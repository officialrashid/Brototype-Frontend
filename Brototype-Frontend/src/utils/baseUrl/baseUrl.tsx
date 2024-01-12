import axios, { AxiosInstance } from "axios";

axios.defaults.withCredentials = true;

const Api: AxiosInstance = axios.create({
  // baseURL: "http://brototype.com",
  baseURL: "http://localhost:5001",
});

// Add a request interceptor
Api.interceptors.request.use(
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
Api.interceptors.response.use(
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

export default Api;

