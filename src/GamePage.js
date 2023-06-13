import { useState, useEffect } from "react";
const GamePage = () => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer =
      timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <main className="main">
      <section id="stats">
        <h2>Time: {timeLeft}</h2>
        <h2>Score: </h2>
      </section>
    </main>
  );
};

export default GamePage;
