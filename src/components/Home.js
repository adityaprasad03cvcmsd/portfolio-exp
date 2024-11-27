import React, { useState } from "react";
import logo from "../images/logo.png";
import mobilePic from "../images/mobile.png";
import "./Home.css";

export const Home = () => {
  const [mobile, setMobile] = useState(false);

  const navbarForMobile = () => {
    return (
      <div className="navbarformobile">
        <a href="#Home" onClick={() => setMobile(!mobile)}>
          <li className="nav__items">Home</li>
        </a>
        <a href="#About" onClick={() => setMobile(!mobile)}>
          <li className="nav__items">About</li>
        </a>
        <a href="#Skills" onClick={() => setMobile(!mobile)}>
          <li className="nav__items">Skills</li>
        </a>
        <a href="#Experience" onClick={() => setMobile(!mobile)}>
          <li className="nav__items">Experience</li>
        </a>
        <a href="#Project" onClick={() => setMobile(!mobile)}>
          <li className="nav__items">Projects</li>
        </a>
        <a href="#Contact" onClick={() => setMobile(!mobile)}>
          <li className="nav__items">Contact</li>
        </a>
      </div>
    );
  };

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30 navigation">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items">About</li>
              </a>
              <a href="#Experience">
                <li className="nav__items">Experience</li>
              </a>
              <a href="#Skills">
                <li className="nav__items">Skills</li>
              </a>
              <a href="#Project">
                <li className="nav__items">Projects</li>
              </a>
              <a href="#Contact">
                <li className="nav__items">Contact</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="home_content">
            <img
              id="contents"
              src={mobilePic}
              alt="Menu"
              onClick={() => setMobile(!mobile)}
            />
            <h1 className="home_line1">
              Hi, I am Aditya Prasad {mobile ? navbarForMobile() : null}
            </h1>
            <h3 className="home_line2">Backend Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
