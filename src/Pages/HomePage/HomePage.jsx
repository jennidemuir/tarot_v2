import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
  useHistory,
} from "react-router-dom";

import CardLibrary from "../CardLibrary/CardLibrary";
import Oracle from "../Oracle/Oracle";

import "./homepage-styles.css";

// import React, { Component } from "react";

// export class HomePage extends Component {
//   handleClick = (e) => {
//     console.log(e.target.id);
//     return <Redirect to='/{e.target.id}' />
//   };

//   render() {
//     return (
//       <div className="homepage">
//         <div
//           onClick={this.handleClick}
//           className="linkContainer"
//           id="libraryContainer"
//         >
//           <img
//             className="homeImage"
//             id="library"
//             src="https://www.trustedtarot.com/img/cards/the-sun.png"
//           />
//           {/* <Link to="/library">Library</Link> */}
//         </div>
//         <div
//           onClick={this.handleClick}
//           className="linkContainer"
//           id="oracleContainer"
//         >
//           <img
//             className="homeImage"
//             id="oracle"
//             src="https://www.trustedtarot.com/img/cards/the-moon.png"
//           />
//           {/* <Link to="/oracle">Tarot Oracle</Link> */}
//         </div>
//       </div>
//     );
//   }
// }

// export default HomePage;

export const HomePage = () => {
  const history = useHistory();
  const handleClick = (e) => {
    console.log(e.target.id);
    history.push(`/${e.target.id}`);
  };
  return (
    <div className="homepage">
      <div className="linkContainer" id="libraryContainer">
        {" "}
        <h2 className="homeTitle">The Library</h2>
        <img
          className="homeImage"
          id="library"
          src="https://www.trustedtarot.com/img/cards/the-sun.png"
          onClick={handleClick}
        />
        {/* <Link to="/library">Library</Link> */}
      </div>
      <div className="linkContainer" id="oracleContainer">
        <h2 className="homeTitle">The Oracle</h2>
        <img
          className="homeImage"
          id="oracle"
          src="https://www.trustedtarot.com/img/cards/the-moon.png"
          onClick={handleClick}
        />
        {/* <Link to="/oracle">Tarot Oracle</Link> */}
      </div>
    </div>
  );
};
