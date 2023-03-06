// import React from "react";
// import { createContext, useContext, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocalStorage } from "./useLocalStorage";

// const AuthContext = createContext();

// export const Auth = () => {
//   const [isAuth, setIsAuth] = useLocalStorage();
//   const navigate = useNavigate();
//   const login = async (data) => {
//     setIsAuth(data);
//     navigate("/bankdetail", { replace: true });
//   };
//   const logout = () => {
//     setIsAuth(null);
//     navigate("/", { replace: true });
//   };
//   const value = useMemo(
//     () => ({
//       isAuth,
//       login,
//       logout,
//     }),
//     [isAuth]
//   );
//   return <AuthContext.Provider value={value}></AuthContext.Provider>;
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
