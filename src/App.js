import logo from "./logo.svg";
import "./App.css";
import React from "react";
import AppWrapper from "./List/routes/AppWrapper";

const App = () => {
  
  return (
    <>
      <AppWrapper />
    </>
    // <div>
    //  <BrowserRouter>
    //     <main>
    //       <Routes>
    //         {/* Customer and admin */}
    //         <Route path="/" element={<Protected Component={Login} />} />
    //         <Route path="login" element={<Login />} />
    //         <Route path="adminlogin" element={<AdminLogin />} />
    //         <Route path="registration" element={<Registration />} />
    //         <Route path="*" element={<Error />} />
    //         {!Uname && (
    //           <Route path="drawers" element={<Drawers />}>
    //             <Route path="bankdetail" element={<BankDetail />} />
    //             <Route path="bankbalance" element={<BankBalance />} />
    //             <Route path="newcustomer" element={<NewCustomer />} />
    //           </Route>
    //         )}

    //         <Route path="drawers" element={<Drawers />}>
    //           <Route path="payments" element={<Payments />} />
    //           <Route path="profile" element={<Profile />} />
    //           <Route path="paymentform" element={<PaymentForm />} />
    //         </Route>
    //       </Routes>
    //     </main>
    //     {/* </BrowserRouter> */}
    //   </div>
  );
};

export default App;
