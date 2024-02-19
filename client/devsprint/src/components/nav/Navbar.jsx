import React, { useLayoutEffect, useRef, useState } from "react";
import "./navbar.css";
import logo from "/Landie.png";
import menu from "/menu.svg";
import { useNavigate, Link } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Services",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef(null);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setDropdown(false);
      setMobileMenu(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setTimeout(() => {
      setLogin(false);
      navigate("/");
      window.location.reload(true);
    }, 1000);
  };

  useLayoutEffect(() => {
    const token = JSON.parse(
      localStorage.getItem("token") || sessionStorage.getItem("token")
    );
    if (token) {
      setLogin(true);
      setAvatar(token.avatar);
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);

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
          {menuItems.map((item, index) => {
            return (
              <li key={item.name}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}

          {login ? (
            <div
              className="user"
              onClick={handleDropdown}
              onKeyUp={handleDropdown}
            >
              <img src={avatar} alt="avatar" />

              {dropdown && (
                <div className="dropdown" ref={menuRef}>
                  <Link to="/dashboard" onClick={handleDropdown}>
                    Dashboard
                  </Link>
                  <Link to="/profile" onClick={handleDropdown}>
                    Profile
                  </Link>
                  <Link to="/" onClick={handleDropdown}>
                    Settings
                  </Link>
                  <Link to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              SIGN IN
            </button>
          )}
        </ul>
      </nav>
      <div className="mobile-menu">
        <img
          src={menu}
          alt="menu"
          onClick={handleMobileMenu}
          onKeyUp={handleMobileMenu}
        />

        {mobileMenu && (
          <div className="mobile-dropdown" ref={menuRef}>
            <img src={avatar} alt="avatar" />
            <Link to="/dashboard" onClick={handleMobileMenu}>
              Dashboard
            </Link>
            <Link to="/profile" onClick={handleMobileMenu}>
              Profile
            </Link>
            <Link to="/" onClick={handleMobileMenu}>
              Settings
            </Link>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
