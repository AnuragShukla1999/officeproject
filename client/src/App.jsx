
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

          <Route path='/billing' element={isLoggedInUser ? <Billing /> : <SignIn />} />
          <Route path='/channel' element={isLoggedInUser ? <Channel /> : <SignIn />} />
          <Route path='/ndr' element={isLoggedInUser ? <NDR /> : <SignIn />} />
          <Route path='/orders' element={isLoggedInUser ? <Orders /> : <SignIn />} />
          <Route path='/ratecalculator' element={isLoggedInUser ? <RateCalculator /> : <SignIn />} />
          <Route path='/remittance' element={isLoggedInUser ? <Remittance /> : <SignIn />} />
          <Route path='/reports' element={isLoggedInUser ? <Reports /> : <SignIn />} />
          <Route path='/profile/:id' element={isLoggedInUser ? <Profile /> : <SignIn />} />

        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
