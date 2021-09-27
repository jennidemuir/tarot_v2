import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import tarotIcon from "./tarot.png";

import "./header-styles.css";

import React, { Component } from "react";
import { DropDown } from "../DropDown/DropDown";

export class Header extends Component {
  state = {
    active: false,
  };

  navbarClick = () => {
    this.setState({
      active: !this.state.active,
    });
    console.log(this.state.active);
  };

  render() {
    return (
      <div className="header">
        <img className="tarotIcon" src={tarotIcon} onClick={this.navbarClick} />
        {this.state.active ? (
          <div className="content">
            <DropDown />
          </div>
        ) : (
          <div className="content"></div>
        )}
      </div>
    );
  }
}

export default Header;

// export const Header = () => {
//   return (
//     <div className="header">
//       {}
//       <img className="tarotIcon" src={tarotIcon} onClick={navbarClick} />

//       <NavLink
//         className="navlink"
//         to="/"
//         exact
//         activeStyle={{ color: "purple" }}
//       >
//         Home
//       </NavLink>

//       <NavLink
//         className="navlink"
//         to="library"
//         exact
//         activeStyle={{ color: "purple" }}
//       >
//         Card Library
//       </NavLink>

//       <NavLink
//         className="navlink"
//         to="oracle"
//         exact
//         activeStyle={{ color: "purple" }}
//       >
//         Tarot Reading
//       </NavLink>
//     </div>
//   );
// };
