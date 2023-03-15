import React from "react";
import Login from "../component/Login";
import Index from "./Index";
import BankDetail from "../component/BankDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BankBalance from "../component/BankBalance";
import NewCustomer from "../component/NewCustomer";
import Registration from "../component/Registration";
import Error from "../component/Error";
import Protected from "../component/Protected";
import Drawers from "../component/Drawers";
import Payments from "../component/Payments";
import Profile from "../component/Profile";
import AdminLogin from "../component/AdminLogin";
import PaymentForm from "../component/PaymentForm";

const AppWrapper = () => {
  const Uname = localStorage.getItem("Uname");
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route
              path={Index.Login}
              element={<Protected Component={Login} />}
            />
            <Route path={Index.Login} element={<Login />} />
            <Route path={Index.AdminLogin} element={<AdminLogin />} />
            <Route path={Index.Registration} element={<Registration />} />
            <Route path={Index.Error} element={<Error />} />

            <Route path={Index.Drawers} element={<Drawers />}>
              <Route path={Index.Payments} element={<Payments />} />
              <Route path={Index.Profile} element={<Profile />} />
              <Route path={Index.PaymentForm} element={<PaymentForm />} />
            </Route>
            {/* {Uname && ( */}
            <Route path={Index.Drawers} element={<Drawers />}>
              <Route path={Index.BankDetail} element={<BankDetail />} />
              <Route path={Index.BankBalance} element={<BankBalance />} />
              <Route path={Index.NewCustomer} element={<NewCustomer />} />
            </Route>
            {/* )} */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default AppWrapper;
