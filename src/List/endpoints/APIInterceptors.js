import axios from "axios";
import API from "../endpoints/Index";
const instance = axios.create({
  baseURL: API.FETCH_API,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
console.log("instance", instance);

instance.interceptors.request.use(
  function (config) {
    config.headers.name = "Riya Patadia";
    console.log("config interceptor", config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
