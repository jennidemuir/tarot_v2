import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import tarotImg from "../../Assets/tarot.png";
import crystalBall from "../../Assets/crystal_ball.png"
import "./header-styles.css";


const Header = ({ handleSignUpAction }) => {
  const [tarotIconActive, setTarotIconActive] = useState(false);
  const [userIconActive, setUserIconActive] = useState(false);

  const tarotIconClick = () => {
    let clicked = tarotIconActive;
    setTarotIconActive(!clicked);
  };

  const userIconClick = () => {
    let clicked = userIconActive;
    setUserIconActive(!clicked);
  };

  const activeStyled = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: isActive ? "red" : "",
    };
  };
  return (
    <div>
      <nav className="nav">
        <div className="navElement" id="tarotNavElements">
          <img
            src={tarotImg}
            alt="click here for links to Tarot Reading and Tarot Card Library"
            className="headerIcon"
            onClick={tarotIconClick}
          />
          {tarotIconActive ? (
            <div className="tarotLinkContainer">
              <div className="link">
                <NavLink to="/TarotReading" style={activeStyled}>
                  Tarot Readings
                </NavLink>
              </div>
              <div className="link">
                <NavLink to="/TarotLibrary" style={activeStyled}>
                  Tarot Library
                </NavLink>
              </div>
            </div>
          ) : (
            <div className="link"></div>
          )}
        </div>

        <h1> Madame DeMuir's Mystic Tarot</h1>
        {/* <div className="navElement" id="userNavElement">
          <img
            src={crystalBall}
            alt="Click here for links to Log In or Sign Up"
            className="headerIcon"
            onClick={userIconClick}
          />
          {userIconActive ? (
            <div className="UserLinkContainer">
              <div className="link">
                <NavLink
                  to="/SignUp"
                  style={activeStyled}
                >
                  Sign Up
                </NavLink>
              </div>
            </div>
          ) : (
            <div className="link"></div>
          )}
        </div> */}
      </nav>
    </div>
  );
};

export default Header;
