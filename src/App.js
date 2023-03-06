import logo from "./logo.svg";
import "./App.css";
import BankDetail from "./List/component/BankDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BankBalance from "./List/component/BankBalance";
import NewCustomer from "./List/component/NewCustomer";
import Registration from "./List/component/Registration";
import Login from "./List/component/Login";
import Error from "./List/component/Error";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            {/* Customer and admin */}
            <Route index element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="bankdetail" element={<BankDetail />} />
            <Route path="bankbalance" element={<BankBalance />} />
            <Route path="newcustomer" element={<NewCustomer />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
