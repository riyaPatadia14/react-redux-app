import logo from "./logo.svg";
import "./App.css";
import BankDetail from "./List/component/BankDetail";
import { Routes, Route } from "react-router-dom";
import BankBalance from "./List/component/BankBalance";
import NewCustomer from "./List/component/NewCustomer";
import Registration from "./List/component/Registration";
import Login from "./List/component/Login";
import Error from "./List/component/Error";
import Protected from "./List/component/Protected";
import Drawers from "./List/component/Drawers";
import React, { useState } from "react";
import Payments from "./List/component/Payments";
import Profile from "./List/component/Profile";
import AdminLogin from "./List/component/AdminLogin";
import PaymentForm from "./List/component/PaymentForm";

const App = () => {
  const Uname = localStorage.getItem("Uname");
  return (
    <div>
      {/* <BrowserRouter> */}
      <main>
        <Routes>
          {/* Customer and admin */}
          <Route path="/" element={<Protected Component={Login} />} />
          <Route path="login" element={<Login />} />
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<Error />} />
          {!Uname && (
            <Route path="drawers" element={<Drawers />}>
              <Route path="bankdetail" element={<BankDetail />} />
              <Route path="bankbalance" element={<BankBalance />} />
              <Route path="newcustomer" element={<NewCustomer />} />
            </Route>
          )}

          <Route path="drawers" element={<Drawers />}>
            <Route path="payments" element={<Payments />} />
            <Route path="profile" element={<Profile />} />
            <Route path="paymentform" element={<PaymentForm />} />
          </Route>
        </Routes>
      </main>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
