import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import Register from "./pages/auth/register/register";

function App() {
  return (
    <div className="main-container">
      <Navbar />

      <main className="main">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
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
