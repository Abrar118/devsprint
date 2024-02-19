import React, { useLayoutEffect, useState } from "react";
import "./hero.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useLayoutEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-title">
        <h1>
          Introduce Your Product <br /> Quickly & Effectively
        </h1>
        <p>Get your project done in a sprint with our platform</p>
      </div>

      <div className="hero-buttons">
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.04 }}
          className="get-started hero-button"
          type="button"
          onClick={() => {
            navigate(isAuthenticated ? "/dashboard" : "/register");
          }}
        >
          {isAuthenticated ? "Dashboard" : "Get Started"}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.04 }}
          className="learn-more hero-button"
          type="button"
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
