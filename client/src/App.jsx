
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from 'react-hot-toast';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
// import Navbar from './component/Navbar';
import { PrivateRoute } from './component/PrivateRoute';
import { Home } from './pages/Home';



function App() {

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
            <Route path="/home" element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
