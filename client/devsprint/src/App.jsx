import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Register from "./pages/auth/register/register";
import Login from "./pages/auth/login/login";
import ForgotPass from "./pages/auth/forgot-pass/ForgotPass";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import MainDash from "./pages/dashboard/mainDashboard/MainDash";
import Codespace from "./pages/dashboard/codespace/Codespace";
import OpenProject from "./pages/dashboard/openProject/OpenProject";
import MyProject from "./pages/dashboard/myProjects/MyProject";

function App() {
  return (
    <div className="main-container">
      <Navbar />

      <main className="main">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index path="" element={<MainDash />} />
            <Route path="codespace" element={<Codespace />} />
            <Route path="openproject" element={<OpenProject />} />
            <Route path="myproject" element={<MyProject />} />
          </Route>
          <Route index path="profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />

      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
