import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { IUser } from "../interfaces/user";
import logo from "../assests/logo.png";
import "@fortawesome/fontawesome-free/css/all.css";

interface NavbarProps {
  user: null | IUser;
  setUser: Function;
}

function Navbar({ user, setUser }: NavbarProps) {
  console.log("user in the navbar:", user);
  const [isActive, setIsActive]= useState(false)

    const toggleMenu = () => {
    setIsActive(!isActive);
  };

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

 return (
    <>
      <header>
        <nav className="navbar is-info">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/">
                <img className="image is-64x64" src={logo} alt="outline of a wave" />
              </Link>
              <a
                role="button"
                className={`navbar-burger ${isActive ? "is-active" : ""}`}
                aria-label="menu"
                aria-expanded={isActive ? "true" : "false"}
                onClick={toggleMenu}
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true" className="has-text-black"></span>
                <span aria-hidden="true" className="has-text-black"></span>
                <span aria-hidden="true" className="has-text-black"></span>
              </a>
            </div>
            <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
              <div className="navbar-start">
                <Link to="/regions" className="navbar-item has-text-black">
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fa-solid fa-earth-europe"></i>
                    </span>
                    <span>Regions</span>
                  </span>
                </Link>
                <Link to="/aboutme" className="navbar-item has-text-black">
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fa-regular fa-face-smile"></i>
                    </span>
                    <span>About Me</span>
                  </span>
                </Link>
              </div>
              <div className="navbar-end">
                {!user && (
                  <Link to="/signup" className="navbar-item has-text-light">
                    <span className="icon-text">
                      <span className="icon">
                        <i className="fa-solid fa-right-to-bracket"></i>
                      </span>
                      <span>Sign Up</span>
                    </span>
                  </Link>
                )}
                {!user && (
                  <Link to="/login" className="navbar-item has-text-black">
                    <span className="icon-text">
                      <span className="icon">
                        <i className="fa-solid fa-anchor"></i>
                      </span>
                      <span>Login</span>
                    </span>
                  </Link>
                )}
                {user && (
                  <Link to="/" className="logout navbar-item has-text-black ">
                    <span onClick={logout}>
                      <span>Logout</span>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
