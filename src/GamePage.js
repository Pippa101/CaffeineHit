import { useState } from "react";
import Timer from "./Timer";
import CoffeeOrder from "./CoffeeOrder";
import ResultsPage from "./ResultsPage";

const GamePage = () => {
  const [timeLeft, setTimeLeft] = useState(60);

  const [score, setScore] = useState(0);
  const coffees = [
    "espresso",
    "americano",
    "cappuccino",
    "latte",
    "flat white",
    "mocha",
    "macciato",
    "decaf",
  ];

  return timeLeft ? (
    <main className="main">
      <section id="stats">
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
        <h2>Score: {score}</h2>
      </section>
      <CoffeeOrder
        coffees={coffees}
        timeLeft={timeLeft}
        setScore={setScore}
        score={score}
      />
    </main>
  ) : (
    <ResultsPage score={score} />
  );
};

export default GamePage;
