import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./oracle-styles.css";

import Data from "../../Data/tarotCardDB.json";
import CardPicker from "../../Components/CardPicker/CardPicker";
import CardReader from "../../Components/CardReader/CardReader";

export class Oracle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Data,
      cards: [],
      clicked: false,
      cardShort: "",
      cardLong: "",
      cardTitle: "",
      cardMeaning: "",
      image: "",
      nums: new Set(),
      backgroundColor: "white",
    };
  }
  componentDidMount() {
    while (this.state.nums.size !== 77) {
      this.setState({
        nums: this.state.nums.add(Math.floor(Math.random() * 77) + 1),
      });
    }

    this.setState({
      nums: [...this.state.nums],
    });
  }

  handleCardClick = (e) => {
    const data = this.state.data;
    console.log(this.state.nums.pop(), this.state.nums.length);
    let num = this.state.nums.pop();
    // let random = this.randomIntFromInterval(1, 77);
    let card = data.find((el) => el.id - 1 === num);
    // console.log(card);

    // if (card.boolean === false) {
    //   console.log("hi");
    //   random = this.randomIntFromInterval(1, 77);
    //   card = data.find((el) => el.id - 1 === random);
    // }
    if (this.state.cards.length <= 4 && e.target.checked === false) {
      e.target.src = card.img;
      e.target.checked = true;
      this.setState({ cards: [...this.state.cards, card] });
    }
  };

  handleClickReveal = (e) => {
    const cardone = this.state.cards[0],
      cardtwo = this.state.cards[1],
      cardthree = this.state.cards[2],
      cardfour = this.state.cards[3],
      cardfive = this.state.cards[4];
    e.target.active = !e.target.active;
    e.target.active
      ? (e.target.style.backgroundColor = "rgb(240, 116, 116)")
      : (e.target.style.backgroundColor = "white");
    if (e.target.active) {
      console.log(e.target.style.backgroundColor);
      if (e.target.id === "cardone") {
        this.setState({
          cardShort: cardone.shortDescription,
          cardLong: cardone.longDescription,
          cardTitle: cardone.Title,
          cardMeaning:
            "This first position represents You, the Quarent, and your current situation",
          image: cardone.img,
        });
        e.target.src = cardone.img;
      } else if (e.target.id === "cardtwo") {
        this.setState({
          cardShort: cardtwo.shortDescription,
          cardLong: cardtwo.longDescription,
          cardTitle: cardtwo.Title,
          cardMeaning:
            "The second card in this reading represents the path you are on",
          image: cardtwo.img,
        });
        e.target.src = cardtwo.img;
      } else if (e.target.id === "cardthree") {
        this.setState({
          cardShort: cardthree.shortDescription,
          cardLong: cardthree.longDescription,
          cardTitle: cardthree.Title,
          cardMeaning:
            "The third card in this reading signifies obstacles that you will face on your journey",
          image: cardthree.img,
        });
        e.target.src = cardthree.img;
      } else if (e.target.id === "cardfour") {
        this.setState({
          cardShort: cardfour.shortDescription,
          cardLong: cardfour.longDescription,
          cardTitle: cardfour.Title,
          cardMeaning:
            "The fourth card represents what is helping you on current path",
          image: cardfour.img,
        });
        e.target.src = cardfour.img;
      } else if (e.target.id === "cardfive") {
        this.setState({
          cardShort: cardfive.shortDescription,
          cardLong: cardfive.longDescription,
          cardTitle: cardfive.Title,
          cardMeaning:
            "The final card in this reading signifies how progress can be made to reach your goals",
          image: cardfive.img,
        });
        e.target.src = cardfive.img;
      }
      e.target.active = !e.target.active;
      this.setState({
        backgroundColor: "white",
      });
    }
  };

  // randomNumber = () => {
  //   console.log(typeof this.state.size);
  //   while (this.state.nums.size !== 78) {
  //     this.setState({
  //       nums: this.state.nums.add(Math.floor(Math.random() * 78) + 1),
  //     });
  //   }

  //   this.setState({
  //     nums: [...this.state.nums],
  //   });
  // };

  handleBtnClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div className="oracle">
        {this.state.clicked ? (
          <CardReader
            bgColor={this.state.backgroundColor}
            cardShort={this.state.cardShort}
            cardLong={this.state.cardLong}
            cardTitle={this.state.cardTitle}
            cardMeaning={this.state.cardMeaning}
            img={this.state.image}
            handleClickReveal={this.handleClickReveal}
            newReadingClick={this.handleBtnClick}
          />
        ) : (
          <CardPicker
            cards={this.state.cards}
            handleCardClick={this.handleCardClick}
            handleBtnClick={this.handleBtnClick}
          />
        )}
      </div>
    );
  }
}

export default Oracle;
