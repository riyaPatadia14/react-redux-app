import React, { Suspense } from "react";
// import Login from "../component/Login";
import Index from "./Index";
import BankDetail from "../component/BankDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BankBalance from "../component/BankBalance";
import Withdrawal from "../component/Withdrawal";
import Registration from "../component/Registration";
import Error from "../component/Error";
import Protected from "../guard/Protected";
import Drawers from "../component/Drawers";
import Payments from "../component/Payments";
import Profile from "../component/Profile";
import AdminLogin from "../component/AdminLogin";
import PaymentForm from "../component/PaymentForm";
import Roles from "./Roles";
import PublicElement from "./PublicElement";
import AdminElement from "./AdminElement";
import APIInter from "../component/APIInter";
const Login = React.lazy(() => import("../component/Login"));
const AppWrapper = () => {
  {
    console.log("Roles", Roles);
  }
  const UserType = Roles.Admin;
  console.log(UserType);
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="apiiter" element={<APIInter />} />
            <Route path={Index.Login} index element={<Login />} />
            <Route path={Index.AdminLogin} element={<AdminLogin />} />
            <Route path={Index.Registration} element={<Registration />} />
            <Route path={Index.Error} element={<Error />} />
            <Route element={<Protected />}>
              <Route path={Index.Drawers} element={<Drawers />}>
                <Route path={Index.Profile} element={<Profile />} />
                <Route path={Index.Payments} element={<Payments />} />
                <Route path={Index.PaymentForm} element={<PaymentForm />} />
                <Route path={Index.BankDetail} element={<BankDetail />} />
                <Route path={Index.BankBalance} element={<BankBalance />} />
                <Route path={Index.Withdrawal} element={<Withdrawal />} />
              </Route>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default AppWrapper;
