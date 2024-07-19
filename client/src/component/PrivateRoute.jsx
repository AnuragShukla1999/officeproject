// // eslint-disable-next-line no-unused-vars
// import React from "react";
// // import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// // import { Home } from "../pages/Home";
// import { Dashboard } from "../pages/SidebarPage/Dashboard";


// // eslint-disable-next-line react/prop-types
// export const PrivateRoute = () => {
//     // const { userData } = useSelector((state) => state.user);

//     const isLoggedIn = localStorage.getItem('token');

//     // console.log(userData.token)
//     console.log(isLoggedIn);

//     return (
//         isLoggedIn ? <Dashboard/> : <Navigate to={"/"} /> 
//     )
// }






// // eslint-disable-next-line no-unused-vars
// import React, { useContext } from "react";
// import { Navigate, Route } from "react-router-dom";
// import { AuthContext } from "../context";
// import { Dashboard } from "../pages/SidebarPage/Dashboard";

// const PrivateRoute = ({ ...props }) => {
//     const { user } = useContext(AuthContext);

//     return user ? (
//         <Route {...props} element={<Dashboard />} />
//     ) : (
//         <Navigate to="/" replace />
//     );
// };

// export default PrivateRoute;

