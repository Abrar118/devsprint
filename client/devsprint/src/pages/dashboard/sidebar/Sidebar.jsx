import React from "react";
import "./Sidebar.css";
import logo from "/Landie.png";
import { motion } from "framer-motion";

import { MdDashboard } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { FaCodeCompare } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setTimeout(() => {
      navigate("/");
      window.location.reload(true);
    }, 1000);
  };

  return (
    <div className="dashboard-sidebar">
      <img
        src={logo}
        alt="logo"
        className="site-logo"
        onClick={() => {
          navigate("/");
        }}
        onKeyUp={() => {
          navigate("/");
        }}
      />

      <ul className="sidebar-links">
        <motion.li
          whileTap={{ scale: 1.04 }}
          className="sidebar-link"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <MdDashboard className="sidebar-icon" />
          <span className="link-desc">Dashboard</span>
        </motion.li>
        <motion.li whileTap={{ scale: 1.04 }} className="sidebar-link">
          <GoProjectSymlink className="sidebar-icon" />
          <span className="link-desc">My Projects</span>
        </motion.li>
        <motion.li whileTap={{ scale: 1.04 }} className="sidebar-link">
          <PiProjectorScreenChartFill className="sidebar-icon" />
          <span className="link-desc">Explore Projects</span>
        </motion.li>
        <motion.li whileTap={{ scale: 1.04 }} className="sidebar-link">
          <FaCodeCompare className="sidebar-icon" />
          <span className="link-desc">Codespaces</span>
        </motion.li>
        <motion.li whileTap={{ scale: 1.04 }} className="sidebar-link">
          <FaChalkboardTeacher className="sidebar-icon" />
          <span className="link-desc">Educcational Resources</span>
        </motion.li>
        <motion.li
          whileTap={{ scale: 1.04 }}
          className="sidebar-link last-child"
          onClick={handleLogout}
        >
          <IoLogOutSharp className="sidebar-icon" />
          <span className="link-desc">Logout</span>
        </motion.li>
      </ul>
    </div>
  );
};

export default Sidebar;

//
