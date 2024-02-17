import React from "react";
import "./home.css";
import Hero from "./hero/hero";
import Features from "./features/Features";

const Home = () => {
  return (
    <div className="homepage">
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
