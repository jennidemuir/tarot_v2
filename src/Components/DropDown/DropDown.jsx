import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import "./dropdown-styles.css";

export const DropDown = () => {
  return (
    <div className="dropdown">
      <NavLink
        className="navlink"
        to="/"
        exact
        activeStyle={{ color: "purple" }}
      >
        Home
      </NavLink>
      <NavLink
        className="navlink"
        to="library"
        exact
        activeStyle={{ color: "purple" }}
      >
        Card Library
      </NavLink>
      <NavLink
        className="navlink"
        to="oracle"
        exact
        activeStyle={{ color: "purple" }}
      >
        Tarot Reading
      </NavLink>
    </div>
  );
};
