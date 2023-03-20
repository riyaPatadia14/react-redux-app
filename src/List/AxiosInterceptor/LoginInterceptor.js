import axios from "axios";
import API from "../endpoints/Index";

const LoginInterceptor = axios.create({
  baseURL: API.Login,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
console.log("LoginInterceptor", LoginInterceptor);

LoginInterceptor.interceptors.request.use(
  function (config) {
    config.headers.name = "LOGIN_API";
    console.log("config interceptor", config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

LoginInterceptor.interceptors.response.use(
  function (response) {
    console.log("response", response);
    console.log("data", response.data);
    console.log("status", response.status);
    console.log("statusText", response.statusText);
    console.log("headers", response.headers);
    console.log("config", response.config);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default LoginInterceptor;
