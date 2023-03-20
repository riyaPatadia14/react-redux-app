import API from "../endpoints/Index";
import axios from "axios";
import LoginInterceptor from "../AxiosInterceptor/LoginInterceptor";
export const LoginAPI = (e) => {
  console.log("e", e);
  console.log("e", e.username);
  console.log("e", e.password);
  return LoginInterceptor.post(API.Login, {
    name: e.username,
    password: e.password,
  });
};

export const RegisterAPI = (e) => {
  const getData = {
    fullname: e.fullname,
    username: e.username,
    password: e.password,
    email: e.email,
  };
  return axios.post(API.Login.auth, getData);
};

export const DetailAPI = () => {
  return axios.get(API.FETCH_DETAIL_API);
};
