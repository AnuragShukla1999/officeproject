// /* eslint-disable no-unused-vars */
// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Toaster } from 'react-hot-toast';
// import { SignUp } from './pages/SignUp';
// import { SignIn } from './pages/SignIn';
// import { PrivateRoute } from './component/PrivateRoute';
// import { Home } from './pages/Home';
// import { Billing } from './pages/SidebarPage/Billing';
// import { Channel } from './pages/SidebarPage/Channel';
// import { NDR } from './pages/SidebarPage/Ndr';
// import { Orders } from './pages/SidebarPage/Orders';
// import { RateCalculator } from './pages/SidebarPage/RateCalculator';
// import { Remittance } from './pages/SidebarPage/Remittance';
// import { Reports } from './pages/SidebarPage/Reports';
// import { Profile } from './component/Profile';
// import { Dashboard } from './pages/SidebarPage/Dashboard';
// import { OrdersById } from './pages/SidebarPage/OrdersById';

// import { useSelector } from 'react-redux';
// import Navbar from './component/Navbar';
// import { Sidebar } from './component/Sidebar';
// import { useContext } from 'react';
// import { AuthContext } from './context';


// // import 'primeflex/primeflex.css';


// function App() {

//   // const isLoggedInUser = localStorage.getItem('token');
//   // console.log(isLoggedInUser);

//   // const { userData } = useSelector((state) => state.user);
//   // console.log("userData", userData);

//   // const { product } = useSelector((state) => state.user);
//   // console.log("productData", product);



//   const { user } = useContext(AuthContext);

//   return (
//     <>
//       <BrowserRouter>
//         <Toaster />

//         <div>
//           {
//             user ? <Navbar /> : ""
//           }
//         </div>

//         <div className='grid grid-cols-12'>

//           <div className='mt-[61px]'>
//             {
//               user ? <Sidebar/> : ""
//             }
//           </div>


//           <div className='col-span-11 mt-[61px]'>
//             <Routes>
//               <Route path="/" element={<SignIn />} />
//               <Route path="/signup" element={<SignUp />} />

//               <Route element={<PrivateRoute />}>
//                 <Route path='/dashboard' element={<Dashboard />} />
//               </Route>

//               <Route path='/orders' element={user ? <Orders /> : <SignIn />} />


//               <Route path='/ordersbyid/:productId' element={user ? <OrdersById /> : <SignIn />} />

//               {/* <Route path='/billing' element={isLoggedInUser ? <Billing /> : <SignIn />} />
//               <Route path='/channel' element={isLoggedInUser ? <Channel /> : <SignIn />} />
//               <Route path='/ndr' element={isLoggedInUser ? <NDR /> : <SignIn />} />
//               <Route path='/ratecalculator' element={isLoggedInUser ? <RateCalculator /> : <SignIn />} />
//               <Route path='/remittance' element={isLoggedInUser ? <Remittance /> : <SignIn />} />
//               <Route path='/reports' element={isLoggedInUser ? <Reports /> : <SignIn />} />
//               <Route path='/profile/:userId' element={isLoggedInUser ? <Profile /> : <SignIn />} /> */}
//               {/* <Route path='/dashboard' element={isLoggedInUser ? <Dashboard /> : <SignIn />} /> */}

//             </Routes>
//           </div>
//         </div>

//       </BrowserRouter >
//     </>
//   )
// }

// export default App















import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
// import { PrivateRoute } from './component/PrivateRoute';
import { Dashboard } from './pages/SidebarPage/Dashboard';
import { Orders } from './pages/SidebarPage/Orders';
import { OrdersById } from './pages/SidebarPage/OrdersById';
import { useContext } from 'react';
import { AuthContext } from './context';
import Navbar from './component/Navbar';
import { Sidebar } from './component/Sidebar';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Toaster />

        {user && <Navbar />}


        <div className='grid grid-cols-12'>
          <div className='mt-[61px]'>
            {user && <Sidebar />}
          </div>

          {/* <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />

                    <Route element={<PrivateRoute />}>
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/ordersbyid/:productId' element={<OrdersById />} />
                    </Route>
                </Routes> */}


          {/* <Route index element={<Navigate to="/dashboard" />} /> */}
          <div className='col-span-11 mt-[61px]'>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={user ? <Dashboard /> : <SignIn />} />
              <Route path="/orders" element={user ? <Orders /> : <SignIn />} />
              <Route path="/ordersbyid/:productId" element={user ? <OrdersById /> : <SignIn />} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App;
