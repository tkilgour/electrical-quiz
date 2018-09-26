import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://rexw75g7vg.execute-api.us-east-1.amazonaws.com/dev"
});

apiInstance.interceptors.request.use(config => {
  NProgress.start(); // eslint-disable-line
  return config;
});

apiInstance.interceptors.response.use(response => {
  NProgress.done(); // eslint-disable-line
  return response;
}, error => {
  NProgress.done();
  return Promise.reject(error);
});

export default apiInstance;
