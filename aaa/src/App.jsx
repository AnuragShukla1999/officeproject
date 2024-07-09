import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { Frontpage } from "./pages/frontpage";
import { PrivateRoute } from "./components/PrivateRoute";
import { Toaster } from "react-hot-toast";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Toaster />
        {/* private route */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Route>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        <Route path="/" element={<Frontpage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
