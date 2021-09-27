import React from "react";
import CardBack from "../CardBack/CardBack";
import CardBackTable from "../CardBackTable/CardBackTable";

import "./cardpicker-styles.css";

const CardPicker = ({ cards, handleCardClick, handleBtnClick }) => {
  return (
    <div className="cardPicker">
      <h1 className="oracleTitle">
        Pick <span className="five">5</span> Cards
      </h1>
      {cards.length === 5 ? (
        <button className="pickerbtn" onClick={handleBtnClick}>
          Go To Reading
        </button>
      ) : null}

      {/* <button className='btn'>Go To Reading</button>  */}
      <div className="picker">
        <CardBack handleCardClick={handleCardClick} />
      </div>
    </div>
  );
};

export default CardPicker;
