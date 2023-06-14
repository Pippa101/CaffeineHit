import { useState, useEffect } from "react";
import CoffeeGrid from "./CoffeeGrid.js";

const CoffeeOrder = ({ coffees, timeLeft, setScore, score }) => {
  const [coffeeRequest, setCoffeeRequest] = useState(null);

  useEffect(() => {
    const orders =
      timeLeft > 0 &&
      setInterval(
        () => setCoffeeRequest(coffees[Math.floor(Math.random() * 8)]),
        1000
      );
    return () => clearInterval(orders);
  }, [timeLeft, coffees]);

  return (
    <section>
      <article className="coffeeOrder">
        <p>{coffeeRequest}</p>
      </article>
      <CoffeeGrid
        coffeeRequest={coffeeRequest}
        setScore={setScore}
        score={score}
      />
    </section>
  );
};

export default CoffeeOrder;
