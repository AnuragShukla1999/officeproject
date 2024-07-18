/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from 'react-hot-toast';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { PrivateRoute } from './component/PrivateRoute';
import { Home } from './pages/Home';
import { Billing } from './pages/SidebarPage/Billing';
import { Channel } from './pages/SidebarPage/Channel';
import { NDR } from './pages/SidebarPage/Ndr';
import { Orders } from './pages/SidebarPage/Orders';
import { RateCalculator } from './pages/SidebarPage/RateCalculator';
import { Remittance } from './pages/SidebarPage/Remittance';
import { Reports } from './pages/SidebarPage/Reports';
import { Profile } from './component/Profile';
import { Dashboard } from './pages/SidebarPage/Dashboard';
import { OrdersById } from './pages/SidebarPage/OrdersById';

import { useSelector } from 'react-redux';
import Navbar from './component/Navbar';
import { Sidebar } from './component/Sidebar';

function App() {

  const isLoggedInUser = localStorage.getItem('token');
  console.log(isLoggedInUser);

  const { userData } = useSelector((state) => state.user);
  console.log("userData", userData);

  const { product } = useSelector((state) => state.user);
  console.log("productData", product);

  return (
    <>
      <BrowserRouter>
        <Toaster />
        
        <div>
          {
            isLoggedInUser ? <Navbar /> : ""
          }
        </div>

        <div className='grid grid-cols-12'>

          <div className='mt-[61px]'>
            {
              isLoggedInUser ? <Sidebar/> : ""
            }
          </div>


          <div className='col-span-11 mt-[61px]'>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />

              <Route element={<PrivateRoute />}>
                <Route path='/dashboard' element={<Dashboard />} />
              </Route>

              <Route path='/orders' element={isLoggedInUser ? <Orders /> : <SignIn />} />



              {/* <Route path='/billing' element={isLoggedInUser ? <Billing /> : <SignIn />} />
              <Route path='/channel' element={isLoggedInUser ? <Channel /> : <SignIn />} />
              <Route path='/ndr' element={isLoggedInUser ? <NDR /> : <SignIn />} />
              <Route path='/ordersbyid/:productId' element={isLoggedInUser ? <OrdersById /> : <SignIn />} />
              <Route path='/ratecalculator' element={isLoggedInUser ? <RateCalculator /> : <SignIn />} />
              <Route path='/remittance' element={isLoggedInUser ? <Remittance /> : <SignIn />} />
              <Route path='/reports' element={isLoggedInUser ? <Reports /> : <SignIn />} />
              <Route path='/profile/:userId' element={isLoggedInUser ? <Profile /> : <SignIn />} /> */}
              {/* <Route path='/dashboard' element={isLoggedInUser ? <Dashboard /> : <SignIn />} /> */}

            </Routes>
          </div>
        </div>

      </BrowserRouter >
    </>
  )
}

export default App
