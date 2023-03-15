import API from "../endpoints/Index";
import axios from "axios";
export const LoginAPI = () => {
  return axios.get(API.Login.auth);
};
export const RegisterAPI = () => {
  return axios.post(API.Register.auth);
};
