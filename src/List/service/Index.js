import API from "../endpoints/Index";
import axios from "axios";
export const LoginAPI = () => {
  return axios.get(API.Login.auth);
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
