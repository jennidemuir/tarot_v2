import React from "react";
import "./tarotcardreader-styles.css";
import CardBack from '../../../Components/CardBack/CardBack'

const TarotCardReader = ({
  cardMeaning,
  cardTitle,
  cardShort,
  cardLong,
  img,
  handleClickReveal,
  bgColor,
}) => {
  let image =
    "https://i.pinimg.com/originals/8f/da/32/8fda32666e7f8f4e2a41fe0ec16537d4.webp";
  return (
    <div className="cardReaderMain">
      <div className="pickedMain">
        <p className="readingEl" id="cardMeaning">
          {cardMeaning}
        </p>
        <div className="pickedContainer">
          <img
            style={{ bgColor }}
            src={image}
            className="pickedImage"
            id="cardone"
            onClick={handleClickReveal}
            active="false"
          ></img>
          <img
            style={{ bgColor }}
            src={image}
            className="pickedImage"
            id="cardtwo"
            onClick={handleClickReveal}
            active="false"
          ></img>
          <img
            style={{ bgColor }}
            src={image}
            className="pickedImage"
            id="cardthree"
            onClick={handleClickReveal}
            active="false"
          ></img>
          <img
            style={{ bgColor }}
            src={image}
            className="pickedImage"
            id="cardfour"
            onClick={handleClickReveal}
            active="false"
          ></img>
          <img
            style={{ bgColor }}
            src={image}
            className="pickedImage"
            id="cardfive"
            onClick={handleClickReveal}
            active="false"
          ></img>
        </div>
        <button
          type="button"
          id="newReadingBtn"
          onClick={() => window.location.reload()}
        >
          New Reading
        </button>
        {/* <div className="image" onClick={this.handleClickReveal} id='center'></div> */}
      </div>

      <div className="readingContainer">
        <img id="activeImg" src={img} />
        <div className="reading">
          <p className="readingEl" id="cardTitle">
            {cardTitle}
          </p>
          {/* <img className="stateImg" src={img} /> */}

          <p className="readingEl" id="cardShort">
            {cardShort}
          </p>
          <p className="readingEl" id="cardLong">
            {cardLong}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TarotCardReader;
