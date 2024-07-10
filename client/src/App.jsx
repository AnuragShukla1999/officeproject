
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from 'react-hot-toast';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
// import Navbar from './component/Navbar';
import { PrivateRoute } from './component/PrivateRoute';
import { Home } from './pages/Home';
import { Billing } from './pages/SidebarPage/Billing';
import { Channel } from './pages/SidebarPage/Channel';
import { NDR } from './pages/SidebarPage/Ndr';
import { Orders } from './pages/SidebarPage/Orders';
import { RateCalculator } from './pages/SidebarPage/RateCalculator';
import { Remittance } from './pages/SidebarPage/Remittance';
import { Reports } from './pages/SidebarPage/Reports';



function App() {


  const isLoggedInUser = localStorage.getItem('token');


  console.log(isLoggedInUser);

  return (
    <>
      <BrowserRouter>
        <Toaster />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* private route */}
          <Route element={<PrivateRoute />}>
            <Route path='/home' element={<Home />} />
          </Route>



          <Route path='/billing' element={<Billing />} />
          <Route path='/channel' element={<Channel />} />
          <Route path='/ndr' element={<NDR />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/ratecalculator' element={<RateCalculator />} />
          <Route path='/remittance' element={<Remittance />} />
          <Route path='/reports' element={<Reports />} />

          {/* <PrivateRoute path="/home" element={<Home/>} /> */}
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
