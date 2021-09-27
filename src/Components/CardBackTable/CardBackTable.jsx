import React from "react";
import CardBack from "../CardBack/CardBack";
import "./cardbacktable-styles.css";

function CardBackTable({ handleCardClick }) {
  //   const cardArray = [];

  //   for (let i = 0; i < 78; i++) {
  //     cardArray[i] = (
  //       <img
  //         className="cardImg"
  //         id={i}
  //         key={i}
  //         checked={false}
  //         onClick={handleCardClick}
  //         src="https://i.pinimg.com/originals/8f/da/32/8fda32666e7f8f4e2a41fe0ec16537d4.webp"
  //       />
  //     );
  //   }

  return (
    <div className="back">
      {/* {cardArray.map((card) => (
        <div className="back">{card}</div>
      ))} */}
      <CardBack handleCardClick={handleCardClick} />
    </div>
  );
}

export default CardBackTable;
