import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://quiz.thomaskilgour.ca/api"
});

apiInstance.interceptors.request.use(config => {
  NProgress.start(); // eslint-disable-line
  return config;
});

apiInstance.interceptors.response.use(response => {
  NProgress.done(); // eslint-disable-line
  return response;
});

export default apiInstance;
