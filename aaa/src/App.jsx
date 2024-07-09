// import { Routes, Route, Navigate } from "react-router-dom";
// import { Dashboard, Auth } from "@/layouts";
// import { Frontpage } from "./pages/frontpage";
// // import { PrivateRoute } from "./components/PrivateRoute";
// import { Toaster } from "react-hot-toast";


// function App() {

  

//   return (

//       <Routes>
//         <Toaster />
//         {/* private route */}
//         <Route path="/dashboard/*" element={<Dashboard/>} />
//         <Route path="/auth/*" element={<Auth />} />
//         <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
//         <Route path="/" element={<Frontpage />} />
//       </Routes>

//   );
// }

// export default App;





import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { Frontpage } from "./pages/frontpage";

function App() {

  const isLoggedIn = localStorage.getItem('token');

  console.log(isLoggedIn);

  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      <Route path="/" element={<Frontpage />} />
    </Routes>
  );
}

export default App;