import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import { motion, AnimatePresence } from "framer-motion";
import PortalPopup from "../../components/Portal/Portal";
import Warning from "../../components/warnings/Warning";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      setLogin(true);
    }
  }, []);

  return (
    <section className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">
        <Outlet />
      </div>

      {!login && <NotLoggedIn />}
    </section>
  );
};

export const NotLoggedIn = () => {
  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      <PortalPopup
        overlayColor="rgba(0,0,0, 0.9)"
        placement="Centered"
        onOutsideClick={() => null}
      >
        <Warning
          error={true}
          message="Not authorized to view this page. Please login"
        />
      </PortalPopup>
    </AnimatePresence>
  );
};

export default Dashboard;
