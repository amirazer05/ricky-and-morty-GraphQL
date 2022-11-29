import React, { useState } from "react";
import hamMenu from "../Images/hamMenu.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [showNavBar, setshowNavBar] = useState(false);

  const openSideNav = () => {
    setshowNavBar(!showNavBar);
  };
  return (
    <>
      <div className="navSection">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <h1>Top.Legal</h1>
            </Link>
          </div>

          <div className="navLinks">
            <ul>
              <li className="link">
                {" "}
                <Link to="/"> Home </Link>{" "}
              </li>
              <li className="link">
                {" "}
                <Link to="services"> Services </Link>{" "}
              </li>
              <li className="link">
                {" "}
                <Link to="aboutus"> About Us </Link>{" "}
              </li>
            </ul>
          </div>

          {/* Login Button */}
          <div className="logInButton">
            <button className="lBtn">
              <span>Dummy Button</span>
            </button>
          </div>

          <div className="hamMenu" onClick={openSideNav}>
            <img src={hamMenu} alt={hamMenu} />
          </div>
        </div>
        <div className={showNavBar ? "mobNavLinks" : "showNo"}>
          <ul>
            <li className="link">
              {" "}
              <Link to="/"> Home </Link>{" "}
            </li>
            <li className="link">
              {" "}
              <Link to="services"> Services </Link>{" "}
            </li>
            <li className="link">
              {" "}
              <Link to="aboutus"> About Us </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
