import React, { Component } from "react";
import { CardContainer } from "../../Components/CardContainer/CardContainer";
import FilterCards from "../../Components/FilterCards/FilterCards";
import Data from "../../Data/tarotCardDB.json";

import "../CardLibrary/cardlibrary-styles.css";
export class CardLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
    };
  }

  handleClick = (e) => {
    console.log(e.target);

    if (e.target.id === "Reset") {
      this.setState({ data: Data });
    } else {
      this.setState({
        data: Data.filter((data) => data.type === e.target.id),
      });
    }
  };

  render() {
    return (
      <div className="library">
        <FilterCards Data={this.state.data} handleClick={this.handleClick} />
        <CardContainer Data={this.state.data} />
      </div>
    );
  }
}

export default CardLibrary;
