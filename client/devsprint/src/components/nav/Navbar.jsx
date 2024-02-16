import React from "react";
import "./navbar.css";
import logo from "/Landie.png";
import menu from "/menu.svg";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <button
          type="button"
          onClick={() => {
            navigate("/register");
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
