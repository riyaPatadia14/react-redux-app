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
import { useState } from "react";

const App = () => {
  const [token, setToken] = useState();
  return (
    <div>
      {/* <BrowserRouter> */}
      <main>
        <Routes>
          {/* Customer and admin */}
          <Route>
            <Route path="/" element={<Protected />} />
            <Route path="login" element={<Protected Component={Login} />} />
            <Route
              path="registration"
              element={<Protected Component={Registration} />}
            />
            <Route />
            <Route />
          </Route>
          <Route path="/" element={<Protected Component={Registration} />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="/drawers" element={<Drawers />}>
            <Route path="/drawers/bankdetail" element={<BankDetail />} />
            <Route path="/drawers/bankbalance" element={<BankBalance />} />
            <Route path="/drawers/newcustomer" element={<NewCustomer />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;
