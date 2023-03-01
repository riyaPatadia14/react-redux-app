import logo from "./logo.svg";
import "./App.css";
import CardGrid from "./List/component/BankDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BankBalance from "./List/component/BankBalance";
import NewCustomer from "./List/component/NewCustomer";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            <Route index element={<CardGrid />} />
            <Route path="bankbalance" element={<BankBalance />} />
            <Route path="newcustomer" element={<NewCustomer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
