import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/Landie.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { GrNotes } from "react-icons/gr";

import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="upper-footer">
        <p>© 2024 WAI@Elyria</p>
        <img
          src={Logo}
          alt="Logo"
          onClick={() => {
            navigate("/");
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              navigate("/");
            }
          }}
        />
        <div className="footer-links">
          <Link to="/">
            {" "}
            <MdPrivacyTip /> Privacy Policy
          </Link>
          <Link to="/">
            {" "}
            <GrNotes /> Terms of Service
          </Link>
        </div>
      </div>
      <hr />
      <div className="lower-footer">
        <p>Created by Elyria</p>
        <div className="footer-socials">
          <Link to="/">
            <FaFacebook />
          </Link>
          <Link to="/">
            <FaTwitter />
          </Link>
          <Link to="/">
            <FaInstagram />
          </Link>
          <Link to="/">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
