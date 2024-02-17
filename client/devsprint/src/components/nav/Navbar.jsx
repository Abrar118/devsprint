import React from "react";
import "./navbar.css";
import logo from "/Landie.png";
import menu from "/menu.svg";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <img
        src={logo}
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            navigate("/");
          }
        }}
      />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
        <button
          type="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          SIGN IN
        </button>
      </nav>
      <div>
        <img src={menu} alt="menu" />
      </div>
    </header>
  );
};

export default Navbar;
