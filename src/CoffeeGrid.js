import { useState } from "react";
import Espresso from "./images/Espresso.svg";
import Americano from "./images/Americano.svg";
import Cappuccino from "./images/Cappuccino.svg";
import Latte from "./images/Latte.svg";
import flatwhite from "./images/flatwhite.svg";
import mocha from "./images/mocha.svg";
import macchiato from "./images/macchiato.svg";
import decaf from "./images/decaf.svg";

const CoffeeGrid = ({ coffeeRequest, setScore, score, setRating }) => {
  const [coffeeAnswer, setCoffeeAnswer] = useState("");
  if (score < 9) {
    setRating("poor");
  } else if (score > 9 && score < 25) {
    setRating("not great");
  } else {
    setRating("alright");
  }
  return (
    <section id="coffeeGrid">
      <button
        className="grid-cell"
        onClick={() => {
          setCoffeeAnswer("espresso");
          if (coffeeAnswer === coffeeRequest) {
            setScore(score + 1);
          }
        }}
      >
        <img src={Espresso} alt="cartoon espresso" className="coffee-img" />
        <h3>Espresso</h3>
      </button>

      <button
        className="grid-cell"
        onClick={() => {
          setCoffeeAnswer("americano");
          if (coffeeAnswer === coffeeRequest) {
            setScore(score + 1);
          }
        }}
      >
        <img src={Americano} alt="cartoon Americano" className="coffee-img" />
        <h3>Americano</h3>
      </button>

      <button
        className="grid-cell"
        onClick={() => {
          setCoffeeAnswer("cappuccino");
          if (coffeeAnswer === coffeeRequest) {
            setScore(score + 1);
          }
        }}
      >
        <img src={Cappuccino} alt="cartoon Cappucino" className="coffee-img" />
        <h3>Cappuccino</h3>
      </button>

      <button
        className="grid-cell"
        onClick={() => {
          setCoffeeAnswer("latte");
          if (coffeeAnswer === coffeeRequest) {
            setScore(score + 1);
          }
        }}
      >
        <img src={Latte} alt="cartoon Latte" className="coffee-img" />
        <h3>Latte</h3>
      </button>

      <button
        className="grid-cell"
        onClick={() => {
          setCoffeeAnswer("flat white");
          if (coffeeAnswer === coffeeRequest) {
            setScore(score + 1);
          }
        }}
      >
        <img src={flatwhite} alt="cartoon flat white" className="coffee-img" />
        <h3>Flat White</h3>
      </button>

      <button
        className="grid-cell"
        onClick={() => {
          setCoffeeAnswer("mocha");
          if (coffeeAnswer === coffeeRequest) {
            setScore(score + 1);
          }
        }}
      >
        <img src={mocha} alt="cartoon mocha" className="coffee-img" />
        <h3>Mocha</h3>
      </button>

      <button
        className="grid-cell"
        onClick={() => {
          setCoffeeAnswer("macchiato");
          if (coffeeAnswer === coffeeRequest) {
            setScore(score + 1);
          }
        }}
      >
        <img src={macchiato} alt="cartoon macchiato" className="coffee-img" />
        <h3>macchiato</h3>
      </button>

      <button
        className="grid-cell"
        onClick={() => {
          setCoffeeAnswer("decaf");
          if (coffeeAnswer === coffeeRequest) {
            setScore(score + 1);
          }
        }}
      >
        <img src={decaf} alt="cartoon decaf" className="coffee-img" />
        <h3>Decaf</h3>
      </button>
    </section>
  );
};

export default CoffeeGrid;
