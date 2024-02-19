import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./warning.css";
import { GiCrossedBones } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Warning = ({ error, message }) => {
  const navigate = useNavigate();

  const handleCrossClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeIn", duration: 0.3 }}
      exit={{ x: 1500, transition: { ease: "easeIn", duration: 0.3 } }}
      className="warning-container"
    >
      <GiCrossedBones className="warning-cross" onClick={handleCrossClick} />
      <h2>{error ? "Error" : "Warning"}</h2>
      <p>{message}</p>
    </motion.div>
  );
};

export default Warning;
