import logo from "./logo.svg";
import "./App.css";
import BankDetail from "./List/admin/component/BankDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BankBalance from "./List/admin/component/BankBalance";
import NewCustomer from "./List/admin/component/NewCustomer";
import Registration from "./List/customer/component/Registration";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            {/* Customer */}
            <Route path="registration" element={<Registration />} />
            <Route index element={<BankDetail />} />
            <Route path="bankbalance" element={<BankBalance />} />
            <Route path="newcustomer" element={<NewCustomer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
