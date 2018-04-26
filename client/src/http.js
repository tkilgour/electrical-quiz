import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8081/api"
});

instance.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

instance.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

export default instance;
